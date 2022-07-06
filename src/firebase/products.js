import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from "./config";
import { setDoc, doc, serverTimestamp, deleteDoc } from "firebase/firestore";

const db = getFirestore(app);

export const handleAddProduct = async (category, name, image, price) => {
  const productRef = doc(collection(db, "products"));
  let timestamp = serverTimestamp();

  try {
    await setDoc(productRef, {
      category,
      name,
      image,
      price,
      timestamp: timestamp,
    });
  } catch (err) {
    console.log(err);
  }
  return productRef;
};

export const handleFetchProduct = async (setProducts) => {
  const productsRef = collection(db, "products");
  try {
    onSnapshot(productsRef, (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteProduct = async (id) => {
  const productRef = doc(db, "products", id);

  try {
    await deleteDoc(productRef);
  } catch (error) {
    console.log(error);
  }
};
