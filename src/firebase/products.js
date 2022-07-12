import {
  getFirestore,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  limit,
  getDoc,
} from "firebase/firestore";
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

export const handleFetchProducts = async (
  setProducts,
  filterType,
  limitOfProducts
) => {
  if (typeof limitOfProducts !== "number") {
    return;
  }
  const productsRef = query(
    collection(db, "products"),
    orderBy("timestamp"),
    limit(limitOfProducts)
  );

  try {
    onSnapshot(productsRef, (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  } catch (error) {
    console.log(error);
  }

  if (filterType && filterType !== "showAll") {
    const productsRef = query(
      collection(db, "products"),
      orderBy("timestamp"),
      where("category", "==", filterType ? filterType : ""),
      limit(limitOfProducts)
    );

    try {
      onSnapshot(productsRef, (snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const handleFetchProduct = async (productID) => {
  const productRef = doc(db, "products", productID);
  try {
    const snapshot = await getDoc(productRef);
    return snapshot.data();
  } catch (error) {
    // console.log(error)
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
