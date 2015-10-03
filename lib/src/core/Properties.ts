/**
 *--------------------------------------------------------------------+
 * Properties.ts
 *--------------------------------------------------------------------+
 * Copyright DarkOverlordOfData (c) 2015
 *--------------------------------------------------------------------+
 *
 * This file is a part of Schmup Warz
 *
 * Schmup Warz is free software; you can copy, modify, and distribute
 * it under the terms of the MIT License
 *
 *--------------------------------------------------------------------+
 *
 * Persist properties using LocalStorage
 *
 */
module example.core {
  export class Properties {

    private static db = null;
    private static dbname = "";
    private static properties = null;

    public static init(name, properties) {

      if (Properties.db !== null) {
        return;
      }
      Properties.dbname = name;
      Properties.properties = properties;

      Properties.db = new localStorageDB(Properties.dbname);
      var isNew = Properties.db.isNew();
      if (isNew) {
        Properties.db.createTable("settings", ["name", "value"]);
        Properties.db.createTable("leaderboard", ["date", "score"]);
        for (var key in Properties.properties) {
          var val = Properties.properties[key];
          Properties.db.insert("settings", {
            name: key,
            value: val
          });
        }
        return Properties.db.commit();
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