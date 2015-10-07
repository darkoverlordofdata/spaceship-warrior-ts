/**
 * core/Properties.ts
 *
 * Persist properties using LocalStorage
 *
 */
module example.core {

  declare var chromeStorageDB;

  export class Properties {


    private static db = null;
    private static dbname = "";
    private static properties = null;

    public static init(name, properties) {

      if (Properties.db !== null) return;

      /** Initialize the db with the properties */
      function initializeDb (db) {

        if (db.isNew()) {
          db.createTable("settings", ["name", "value"]);
          db.createTable("leaderboard", ["date", "score"]);
          for (var key in properties) {
            if (properties.hasOwnProperty(key)) {
              db.insert("settings", {
                name: key,
                value: properties[key]
              });
            }
          }
          db.commit();
        }
      }

      Properties.dbname = name;
      Properties.properties = properties;
      //initializeDb(Properties.db = new localStorageDB(Properties.dbname));


      if (window['cordova'] || navigator['isCocoonJS']) {
        // use localStorage only
        initializeDb(Properties.db = new localStorageDB(Properties.dbname));
      } else {
        // try chrome.storage with fallback to localStorage
        chromeStorageDB(Properties.dbname, localStorage, (db) => initializeDb(Properties.db = db));
      }
    }

    /*
     * Get Game Property from local storage
     *
     * @param property name
     * @return property value
     */

    public static get(prop) {
      return Properties.db.queryAll("settings", {
        query: {
          name: prop
        }
      })[0].value;
    }

    /*
     * Set Game Property in local storage
     *
     * @param property name
     * @param property value
     * @return nothing
     */

    public static set = (prop, value) => {
      Properties.db.update("settings", {
        name: prop
      }, (row) => {
        row.value = "" + value;
        return row;
      });
      Properties.db.commit();
    };

    public static setScore(score) {
      var today = new Date();
      var mm = (today.getMonth()+1).toString();
      if (mm.length === 1) mm = '0'+mm;
      var dd = today.getDate().toString();
      if (dd.length === 1) dd = '0'+dd;
      var yyyy = today.getFullYear().toString();
      var yyyymmdd = yyyy+mm+dd;

      if (0 === Properties.db.queryAll('leaderboard', {query: {date: yyyymmdd}}).length) {
        Properties.db.insert('leaderboard', {date: yyyymmdd, score: score});
      } else {
        Properties.db.update('leaderboard', {date: yyyymmdd}, (row) => {
          if (score > row.score) {
            row.score = score;
          }
          return row;
        });
      }
      Properties.db.commit();

    }

    public static getLeaderboard(count) {
      return Properties.db.queryAll('leaderboard', {limit: count, sort: [['score', 'DESC']] });
    }
  }
}