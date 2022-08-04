import { getDatabase, ref, remove, set, onValue } from "firebase/database";

class Database {


    loadDatabase(userId, onUpdate){
    const db = getDatabase();
    // onValue(ref(db, `users/${userId}/${card.id}`), (snapshot) => {
    //   const username = (snapshot.val() && snapshot.val().username);
    //     console.log(username);
    // });


    const dataref = ref(db, `users/${userId}`);
    onValue(dataref, (snapshot) => {
        const cards = snapshot.val();
        console.log(cards);
        cards && onUpdate(cards);
    });


    // return onValue(ref(db, `users/${userId}/`), (snapshot) => {
    //         // const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //         // // ...
    //         console.log(snapshot.val());
    //   } 
    //   );
}
 

    writeUserData(userId, card) {
      const db = getDatabase();
    //   set(ref(db, `users/${userId}/cards`), {
    //     card
    //   });

    set(ref(db, `users/${userId}/${card.id}`), card);
}

    deleteUserData(userId, card) {
        const db = getDatabase();
        remove(ref(db, `users/${userId}/${card.id}`), {
            card
        });
}

}

export default Database;