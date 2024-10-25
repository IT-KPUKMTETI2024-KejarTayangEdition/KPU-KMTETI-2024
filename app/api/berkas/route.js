import {api_secret} from "@/app/env.mjs";
import {PDFDocument} from "pdf-lib";
import { doc, setDoc } from "firebase/firestore";
import {db, storage} from "@/common/libs/firebase";
import {ref, uploadBytes} from "@firebase/storage";

export async function POST(req: Request) {
  const secret = req.headers.get("token");
  const contentType = req.headers.get("content-type");
  // Check if request is authorized
  if (secret !== api_secret) {
    return new Response(JSON.stringify({message: "Unauthorized request"}), {
      status: 401,
    });
  }
  // Check if request is multipart/form-data
  if (contentType !== "multipart/form-data") {
    return new Response(JSON.stringify({message: "Invalid request"}), {
      status: 400,
    });
  }
  const formData = await req.formData();
  // Get form data (GENERAL)
  const nama = formData.get("nama");
  const nim = formData.get("nim");
  const jurusan = formData.get("jurusan");
  const email = formData.get("email");
  const whatsapp = formData.get("whatsapp");
  const alasan = formData.get("alasan");

  // Get form data (Other)
  const visimisi = formData.get("visimisi");

  // Get form data (CV)
  const cv = formData.get("cv");

  // Get form data (images)
  const ktm = formData.get("ktm");
  const suratSehat = formData.get("suratSehat");
  const kartuHasilStudi = formData.get("kartuHasilStudi");
  const motivationLetter = formData.get("motivationLetter");
  const ppsmb = formData.get("ppsmb");
  const tls = formData.get("tls");

  // Check valid CV (TODO: Move to Frontend?)
  if (cv && cv instanceof File && cv.type === "application/pdf") {
    const arrayBuffer = await cv.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    // Basic checks
    const pageCount = pdfDoc.getPageCount();
    if (pageCount === 0) {
      return new Response(JSON.stringify({message: "Invalid file"}), {
        status: 400,
      });
    }

    // Additional checks? (TBC)

    // Keep data to Firebase
    try {
      // Firestore for text values
      await setDoc(doc(db, "cakahim", nim as string), {
        dataDiri: {
          nama: nama as string,
          nim: nim as string,
          jurusan: jurusan as string,
        },
        contact: {
          email: email as string,
          whatsapp: whatsapp as string,
        },
        alasan: alasan as string,
        visimisi: visimisi as string,
      });

      const storageRef = ref(storage, `cakahim/${nim}`);
      const ktmRef = ref(storageRef, "ktm.png");
      const suratSehatRef = ref(storageRef, "suratSehat.png");
      const kartuHasilStudiRef = ref(storageRef, "kartuHasilStudi.png");
      const motivationLetterRef = ref(storageRef, "motivationLetter.png");
      const ppsmbRef = ref(storageRef, "ppsmb.png");
      const tlsRef = ref(storageRef, "tls.png");
      const cvRef = ref(storageRef, "cv.pdf");

      await uploadBytes(ktmRef, await (ktm as File).arrayBuffer());
      await uploadBytes(suratSehatRef, await (suratSehat as File).arrayBuffer());
      await uploadBytes(kartuHasilStudiRef, await (kartuHasilStudi as File).arrayBuffer());
      await uploadBytes(motivationLetterRef, await (motivationLetter as File).arrayBuffer());
      await uploadBytes(ppsmbRef, await (ppsmb as File).arrayBuffer());
      await uploadBytes(tlsRef, await (tls as File).arrayBuffer());
      await uploadBytes(cvRef, await cv.arrayBuffer());
    } catch(err) {
      return new Response(JSON.stringify({message: "Failed to process form data"}), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({message: "Form data processed"}), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({message: "Invalid CV file"}), {
      status: 400,
    });
  }
}