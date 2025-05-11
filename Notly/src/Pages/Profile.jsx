import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const [isSharingNote, setIsSharingNote] = useState(false);

    const [activeTab, setActiveTab] = useState('posts');

    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteCourse, setNewNoteCourse] = useState('');
    const [newNoteDescription, setNewNoteDescription] = useState('');
    const [newNoteFile, setNewNoteFile] = useState(null);


    const user = {
        name: 'Harun Yılmaz',
        university: 'Atatürk Üniversitesi',
        department: 'Bilgisayar Mühendisliği',
        bio: '4. sınıf öğrencisi. Not paylaşmayı ve yeni şeyler öğrenmeyi sever. Kahve tutkunu.',
        avatar: 'https://ui-avatars.com/api/?name=Harun+Y%C4%B1lmaz&background=60A5FA&color=fff&font-size=0.5&bold=true&length=2&rounded=true',
        // bannerImage is removed
    };

    const enrolledCourses = ['Diferansiyel Denklemler', 'Veri Yapıları ve Algoritmalar', 'İşletim Sistemleri', 'Yapay Zeka Temelleri', 'Algoritma Analizi', 'Bilgisayar Ağları', 'Veri Tabanı Sistemleri'];

    const [postedNotes, setPostedNotes] = useState([
        { id: 1, title: 'Diferansiyel Denklemler - Laplace Dönüşümleri ve Uygulamaları', likes: 25, date: '2025-04-20', course: 'Diferansiyel Denklemler' },
        { id: 2, title: 'Veri Yapıları - Kapsamlı Graf Algoritmaları Rehberi', likes: 18, date: '2025-03-15', course: 'Veri Yapıları ve Algoritmalar' },
        { id: 3, title: 'İşletim Sistemleri - Modern Bellek Yönetimi Teknikleri', likes: 32, date: '2025-02-28', course: 'İşletim Sistemleri' },
        { id: 8, title: 'Yapay Zeka - Regresyon Analizi', likes: 15, date: '2025-05-10', course: 'Yapay Zeka Temelleri' },
        { id: 9, title: 'Algoritma Analizi - Zaman ve Alan Karmaşıklığı', likes: 22, date: '2025-05-08', course: 'Algoritma Analizi' },
    ]);

    const likedNotes = [
        { id: 4, title: 'İşletim Sistemleri - CPU Scheduling Stratejileri', author: 'Ayşe Demir', course: 'İşletim Sistemleri', likes: 45 },
        { id: 5, title: 'Lineer Cebir - Vektör Uzayları ve Temel Kavramlar Özeti', author: 'Mehmet Kaya', course: 'Lineer Cebir', likes: 30 },
        { id: 10, title: 'Fizik II - Elektromanyetizma', author: 'Zeynep Çelik', course: 'Temel Fizik II', likes: 55 },
    ];

    const Icons = {
        Course: '🎓',
        LikeFill: '❤️',
        Calendar: '📅',
        ThumbUp: '👍',
        UserCircle: '👤',
        Share: '📤',
        File: '📁',
        Image: '🖼️',
        PDF: '📄',
        Text: '📝',
        XCircle: '❌',
        Back: '⬅️',
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setIsSharingNote(false);
        setNewNoteTitle('');
        setNewNoteCourse('');
        setNewNoteDescription('');
        setNewNoteFile(null);
    };

    const goToHomepage = () => {
        navigate('/notes');
    };

    const handleShareNoteClick = () => {
        setIsSharingNote(true);
        setActiveTab('posts');
    };

    const handleCancelShareClick = () => {
        setIsSharingNote(false);
        setNewNoteTitle('');
        setNewNoteCourse('');
        setNoteDescription('');
        setNewNoteFile(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
             setNewNoteFile(file);
        } else {
            setNewNoteFile(null);
        }
    };

    const handleShareSubmit = (e) => {
        e.preventDefault();

        const newNote = {
            id: Date.now(),
            title: newNoteTitle,
            course: newNoteCourse,
            likes: 0,
            date: new Date().toISOString().slice(0, 10),
            description: newNoteDescription,
            file: newNoteFile ? { name: newNoteFile.name, type: newNoteFile.type } : null,
            author: user.name,
            authorAvatar: user.avatar,
        };

        setPostedNotes([newNote, ...postedNotes]);

        console.log('Paylaşılan Not (Simülasyon):', newNote);
        if(newNoteFile) {
            console.log('Yüklenen Dosya:', newNoteFile.name, newNoteFile.type);
        }

        setIsSharingNote(false);
        setNewNoteTitle('');
        setNewNoteCourse('');
        setNewNoteDescription('');
        setNewNoteFile(null);
    };

    const getFileIcon = (fileType) => {
        if (!fileType) return Icons.File;
        if (fileType.startsWith('text/')) return Icons.Text;
        if (fileType.startsWith('image/')) return Icons.Image;
        if (fileType === 'application/pdf') return Icons.PDF;
        return Icons.File;
    };


    return (
        // Changed background to a subtle gray
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            {/* Adjusted max width and added some padding */}
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">

                <div className="p-5 sm:p-7 border-b border-gray-200 flex justify-start items-center">
                    <button
                        onClick={goToHomepage}
                        className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-semibold group transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Anasayfaya Dön
                    </button>
                </div>

                {/* Removed the banner image section */}

                <div className="relative pt-8 pb-10 text-center px-4 sm:px-6"> {/* Adjusted padding */}
                     {/* Avatar positioned closer to the top without banner */}
                    <img
                        src={user.avatar}
                        alt="avatar"
                        className="mx-auto w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl -mt-16 bg-white" // Adjusted margin top
                    />
                    <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">{user.name}</h1> {/* Adjusted margin top */}
                    <p className="mt-2 text-md sm:text-lg text-indigo-700 font-medium">
                        {user.university} – {user.department}
                    </p>
                    <p className="mt-4 max-w-xl mx-auto text-gray-700 leading-relaxed text-sm sm:text-base">
                        {user.bio}
                    </p>
                </div>

                 {/* Adjusted padding */}
                <div className="flex flex-wrap justify-around py-6 sm:py-7 border-t border-b border-gray-300 bg-gray-50 px-4 sm:px-6">
                    <div className="text-center p-2 min-w-[100px]">
                        <p className="text-2xl font-bold text-indigo-700">{postedNotes.length}</p>
                        <p className="text-xs sm:text-sm text-gray-600">Paylaşım</p>
                    </div>
                    <div className="text-center p-2 min-w-[100px]">
                        <p className="text-2xl font-bold text-indigo-700">{enrolledCourses.length}</p>
                        <p className="text-xs sm:text-sm text-gray-600">Ders</p>
                    </div>
                    <div className="text-center p-2 min-w-[100px]">
                        <p className="text-2xl font-bold text-indigo-700">{likedNotes.length}</p>
                        <p className="text-xs sm:text-sm text-gray-600">Beğeni</p>
                    </div>
                </div>

                   <div className="p-8 sm:p-10">
                       <div className="flex border-b border-gray-300 mb-6">
                           <button
                                onClick={() => handleTabChange('posts')}
                                className={`flex-1 py-3 px-4 text-center font-semibold text-sm transition-colors duration-200 ${activeTab === 'posts' ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-gray-600 hover:text-gray-800 border-b-2 border-transparent'}`}
                           >
                                Paylaşımlar ({postedNotes.length})
                           </button>
                           <button
                                onClick={() => handleTabChange('liked')}
                                className={`flex-1 py-3 px-4 text-center font-semibold text-sm transition-colors duration-200 ${activeTab === 'liked' ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-gray-600 hover:text-gray-800 border-b-2 border-transparent'}`}
                           >
                                Beğenilenler ({likedNotes.length})
                           </button>
                           <button
                                onClick={() => handleTabChange('courses')}
                                className={`flex-1 py-3 px-4 text-center font-semibold text-sm transition-colors duration-200 ${activeTab === 'courses' ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-gray-600 hover:text-gray-800 border-b-2 border-transparent'}`}
                           >
                                Dersler ({enrolledCourses.length})
                           </button>
                       </div>

                       <div className="tab-content">
                           {activeTab === 'posts' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                             <span className={`mr-2 text-blue-600`}>
                                                 {Icons.PDF}
                                             </span>
                                             Paylaştığı Notlar
                                        </h3>
                                        {!isSharingNote ? (
                                             <button
                                                 onClick={handleShareNoteClick}
                                                 className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ease-in-out duration-150"
                                             >
                                                 Not Paylaş
                                             </button>
                                        ) : (
                                             <button
                                                 onClick={handleCancelShareClick}
                                                 className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150"
                                             >
                                                 İptal
                                             </button>
                                        )}
                                    </div>

                                    {!isSharingNote ? (
                                         postedNotes.length > 0 ? (
                                              <ul className="space-y-6">
                                                   {postedNotes.map(note => (
                                                        <li key={note.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group cursor-pointer">
                                                             <h4 className="text-lg font-semibold text-indigo-800 group-hover:text-indigo-900 transition-colors">{note.title}</h4>
                                                             <p className="text-xs text-gray-600 mt-1 mb-3">Ders: <span className="font-medium text-indigo-600">{note.course}</span></p>
                                                             {note.file && (
                                                                  <div className="flex items-center text-sm text-gray-700 mb-2">
                                                                       {getFileIcon(note.file.type)} <span className="ml-1.5">{note.file.name}</span>
                                                                  </div>
                                                             )}
                                                             <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm text-gray-600 mt-3 pt-3 border-t border-gray-100">
                                                                  <span className="flex items-center mb-2 sm:mb-0">
                                                                       {Icons.Calendar} <span className="ml-1.5">{note.date}</span>
                                                                  </span>
                                                                  <span className="flex items-center text-red-600">
                                                                       {Icons.ThumbUp} <span className="ml-1.5 font-medium">{note.likes} Beğeni</span>
                                                                  </span>
                                                             </div>
                                                        </li>
                                                   ))}
                                              </ul>
                                         ) : (
                                              <div className="text-center text-gray-600 py-16 bg-gray-50 rounded-lg">
                                                   <p className="text-xl mb-2">{Icons.PDF}</p>
                                                   <p className="font-semibold">Henüz paylaşılmış not bulunmuyor.</p>
                                                   <p className="text-sm mt-1">İlk notunu paylaşmak için yukarıdaki butonu kullan!</p>
                                              </div>
                                         )
                                    ) : (
                                         <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                                              <form onSubmit={handleShareSubmit} className="space-y-4">
                                                   <div>
                                                        <label htmlFor="noteTitle" className="block text-sm font-medium text-gray-800">
                                                             Not Başlığı
                                                        </label>
                                                        <input
                                                             type="text"
                                                             id="noteTitle"
                                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                                             value={newNoteTitle}
                                                             onChange={(e) => setNewNoteTitle(e.target.value)}
                                                             required
                                                        />
                                                   </div>
                                                   <div>
                                                        <label htmlFor="noteCourse" className="block text-sm font-medium text-gray-800">
                                                             Ders Adı (Örn: Veri Yapıları, Diferansiyel Denklemler)
                                                        </label>
                                                        <input
                                                             type="text"
                                                             id="noteCourse"
                                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                                             value={newNoteCourse}
                                                             onChange={(e) => setNewNoteCourse(e.target.value)}
                                                             required
                                                        />
                                                   </div>
                                                   <div>
                                                        <label htmlFor="noteDescription" className="block text-sm font-medium text-gray-800">
                                                             Not İçeriği / Açıklaması
                                                        </label>
                                                        <textarea
                                                             id="noteDescription"
                                                             rows="4"
                                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                                             value={newNoteDescription}
                                                             onChange={(e) => setNewNoteDescription(e.target.value)}
                                                             required
                                                        ></textarea>
                                                   </div>

                                                   <div>
                                                        <label htmlFor="noteFile" className="block text-sm font-medium text-gray-800 mb-1">
                                                             Not Dosyası (Text, Resim, PDF)
                                                        </label>
                                                        <input
                                                             type="file"
                                                             id="noteFile"
                                                             className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
                                                             onChange={handleFileChange}
                                                             accept=".txt,text/plain,image/*,application/pdf"
                                                        />
                                                        {newNoteFile && (
                                                             <p className="mt-2 text-sm text-gray-700 flex items-center">
                                                                  {getFileIcon(newNoteFile.type)} <span className="ml-1.5">{newNoteFile.name}</span>
                                                             </p>
                                                        )}
                                                   </div>

                                                   <div className="flex justify-end">
                                                        <button
                                                             type="submit"
                                                             className="inline-flex justify-center rounded-md border border-transparent bg-indigo-700 py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                                        >
                                                             Notu Paylaş
                                                        </button>
                                                   </div>
                                              </form>
                                         </div>
                                    )}
                                </div>
                           )}

                           {activeTab === 'liked' && (
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                         <span className="text-rose-600 mr-2">{Icons.LikeFill}</span> Beğendiği Notlar
                                    </h3>
                                    {likedNotes.length > 0 ? (
                                         <ul className="space-y-6">
                                              {likedNotes.map(note => (
                                                    <li key={note.id} className="p-6 bg-rose-50 hover:bg-rose-100 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md cursor-pointer border border-rose-100">
                                                         <p className="font-medium text-sm text-gray-800">{note.title}</p>
                                                         <p className="text-xs text-gray-600 mt-1">{Icons.UserCircle} {note.author} • {note.course}</p>
                                                          {note.likes !== undefined && (
                                                               <span className="flex items-center text-red-600 text-sm mt-2">
                                                                    {Icons.ThumbUp} <span className="ml-1.5 font-medium">{note.likes} Beğeni</span>
                                                               </span>
                                                          )}
                                                    </li>
                                              ))}
                                         </ul>
                                    ) : (
                                         <div className="text-center text-gray-600 py-16 bg-gray-50 rounded-lg">
                                              <p className="text-xl mb-2">{Icons.LikeFill}</p>
                                              <p className="font-semibold">Henüz beğendiğin bir not yok.</p>
                                              <p className="text-sm mt-1">Ana sayfadaki notlara göz at!</p>
                                         </div>
                                    )}
                                </div>
                           )}

                           {activeTab === 'courses' && (
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                         <span className="text-indigo-600 mr-2">{Icons.Course}</span> Kayıtlı Dersler
                                    </h3>
                                    {enrolledCourses.length > 0 ? (
                                         <ul className="space-y-3">
                                              {enrolledCourses.map((course, index) => (
                                                    <li key={index} className="p-4 bg-sky-50 hover:bg-sky-100 transition-all duration-200 rounded-lg text-gray-700 text-sm font-medium shadow-sm hover:shadow-md cursor-pointer border border-sky-100">
                                                         {course}
                                                    </li>
                                              ))}
                                         </ul>
                                    ) : (
                                         <div className="text-center text-gray-600 py-16 bg-gray-50 rounded-lg">
                                              <p className="text-xl mb-2">{Icons.Course}</p>
                                              <p className="font-semibold">Henüz kayıtlı olduğun bir ders yok.</p>
                                              <p className="text-sm mt-1">Profilini güncelleyerek derslerini ekleyebilirsin!</p>
                                         </div>
                                    )}
                                </div>
                           )}
                       </div>
                   </div>
            </div>
        </div>
    );
};

export default Profile;