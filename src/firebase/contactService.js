import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

/**
 * Envía los datos del formulario de contacto a Firestore.
 * @param {Object} formData - { nombre, telefono, tipoServicio, mensaje }
 * @returns {Promise<string>} - ID del documento creado
 */
export async function submitContactForm(formData) {
    const docRef = await addDoc(collection(db, "solicitudes_contacto"), {
        ...formData,
        creadoEn: serverTimestamp(),
    });
    return docRef.id;
}
