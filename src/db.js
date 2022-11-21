import PouchDb from 'pouchdb-browser';
import { v4 as uuidv4 } from 'uuid';
const db = new PouchDb('notes');

export default {
  /**
   * Получение всех записей
   */
  getAllNotes() {
    return db.allDocs(
      { include_docs: true, descending: true },
      function (err, doc) {
        if (!err) {
          return doc.rows;
        }
      },
    );
  },

  /**
   * Добавление записи
   * @param {string} text
   */
  addNotes(text) {
    let note = {
      _id: uuidv4(),
      text: text,
    };

    db.put(note, function (err) {
      if (!err) {
        console.log('Запись была успешна добавлена');
      }
    });
  },

  /**
   * Изменение записи
   *
   */
  editNote(note) {
    db.put(note, function (err) {
      if (!err) {
        console.log('Запись успешна обновлена');
      }
    });
  },

  /**
   * Удаление записи
   * @param {object} note
   */
  deleteNote(note) {
    db.remove(note);
  },
};
