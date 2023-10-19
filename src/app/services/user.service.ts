import { Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

// firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

// model
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private angularFirestore: AngularFirestore) {}

  // Obtener todos los usuarios
  getUsers() {
    return this.angularFirestore.collection('users').snapshotChanges();
  }

  // Obtener un usuario por ID
  getUserById(id: string) {
    return this.angularFirestore.collection('users').doc(id).snapshotChanges();
  }

  // Crear un usuario
  createUser(user: UserService) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('users')
        .add(user)
        .then(
          (res) => {
            console.log(res);
          },
          (err) => reject(err)
        );
    });
  }

  // Actualizar un usuario
  updateUser(user: User, id) {
    return this.angularFirestore.collection('users').doc(id).update({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      department: user.department,
    });
  }

  // Eliminar un usuario
  deleteUser(user: User) {
    return this.angularFirestore.collection('users').doc(user.id).delete();
  }
}
