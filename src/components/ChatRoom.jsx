import { useState, useEffect } from "react";
import { auth, loginWithGoogle, logout, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

export default function ChatRoom() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: message,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: serverTimestamp()
    });
    setMessage("");
  };

  return (
    // UBAH WARNA: Border sekarang menggunakan nuansa violet
    <div className="bg-zinc-900/50 border border-violet-500/30 p-6 rounded-2xl backdrop-blur-md shadow-xl max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-white flex items-center justify-center gap-2">
        <span className="text-violet-500">💬</span> Chat Room
      </h2>

      {user && (
        <div className="flex justify-between items-center mb-6 border-b border-violet-500/20 pb-4">
          <div className="flex items-center gap-3">
            {/* PERBAIKAN: Tambah referrerPolicy="no-referrer" agar foto Google muncul */}
            <img 
              src={user.photoURL} 
              alt="" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border-2 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.3)]" 
            />
            <span className="text-white font-semibold text-sm">{user.displayName}</span>
          </div>
          <button
            onClick={logout}
            className="bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-1.5 rounded-full text-xs hover:bg-red-500 hover:text-white transition-all"
          >
            Logout
          </button>
        </div>
      )}

      <div className="h-80 overflow-y-auto p-4 rounded-xl bg-zinc-950/50 border border-violet-500/10 mb-6 space-y-4 scrollbar-hide">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.uid === user?.uid ? "justify-end" : "justify-start"}`}
          >
            {msg.uid !== user?.uid && (
              <img
                src={msg.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=user"}
                alt=""
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border border-violet-500/40"
              />
            )}
            <div
              className={`p-3 rounded-2xl max-w-[80%] shadow-sm ${
                msg.uid === user?.uid
                  ? "bg-violet-600 text-white rounded-tr-none" // UBAH WARNA: Pesan pengirim jadi Violet
                  : "bg-zinc-800 text-zinc-200 rounded-tl-none border border-violet-500/10"
              }`}
            >
              <div className={`text-[10px] font-bold mb-1 opacity-70 ${msg.uid === user?.uid ? "text-violet-200" : "text-violet-400"}`}>
                {msg.displayName}
              </div>
              <div className="text-sm leading-relaxed">{msg.text}</div>
            </div>
            {msg.uid === user?.uid && (
              <img
                src={msg.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=user"}
                alt=""
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border border-violet-500/40"
              />
            )}
          </div>
        ))}
      </div>

      {user ? (
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ketik pesan..."
            className="flex-1 p-3 rounded-xl bg-zinc-900 text-white border border-violet-500/20 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm"
          />
          <button
            type="submit"
            className="bg-violet-600 px-6 py-2 rounded-xl text-white font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-500/20"
          >
            Send
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-4 py-4">
          <button
            onClick={loginWithGoogle}
            className="flex items-center gap-3 bg-white text-zinc-900 px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-zinc-200 transition-all scale-100 active:scale-95"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt=""
              className="w-5 h-5"
            />
            Login with Google
          </button>
          <p className="text-xs text-zinc-500">Login untuk mulai mengobrol</p>
        </div>
      )}
    </div>
  );
}