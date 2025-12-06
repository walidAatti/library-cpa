    // Books Data
    const books = [
        {
            id: 1,
            title: "1984",
            author: "George Orwell",
            genre: "Fiction",
            description: "A dystopian novel set in a totalitarian state where the government controls every aspect of citizens' lives. Winston Smith's struggle against oppression remains a powerful commentary on freedom and tyranny.",
            image: "ebooks library/1984 — George Orwell/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/n6dg84"
        },
        {
            id: 2,
            title: "Bartleby, the Scrivener",
            author: "Herman Melville",
            genre: "Fiction",
            description: "A novella about a Wall Street copyist whose passive resistance and enigmatic responses challenge the narrator's understanding of work, morality, and human nature.",
            image: "ebooks library/Bartleby, the Scrivener/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/xp6dng"
        },
        {
            id: 3,
            title: "Dracula",
            author: "Bram Stoker",
            genre: "Horror",
            description: "A classic vampire novel told through letters, diary entries, and newspaper clippings. Count Dracula's attempt to spread his curse across Europe is documented through the experiences of his hunters.",
            image: "ebooks library/dracula/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/l7kgwj"
        },
        {
            id: 4,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            genre: "Romance",
            description: "A timeless romance following Elizabeth Bennet as she navigates societal expectations, personal growth, and her complicated feelings for the proud Mr. Darcy.",
            image: "ebooks library/Pride and Prejudice — Jane Austen/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/j76glp"
        },
        {
            id: 5,
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
            genre: "Self-Help",
            description: "A personal finance guide that contrasts the financial philosophies of the author's wealthy friend's father with his own father. Learn principles of investing, assets, and building wealth.",
            image: "ebooks library/rich dad/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/krlg9q"
        },
        {
            id: 6,
            title: "The Adventures of Huckleberry Finn",
            author: "Mark Twain",
            genre: "Fiction",
            description: "A classic American novel following the journey of a young boy and an escaped slave as they travel down the Mississippi River seeking freedom and adventure.",
            image: "ebooks library/The Adventures of Huckleberry Finn/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/9v9xnp"
        },
        {
            id: 7,
            title: "The Fall of the House of Usher",
            author: "Edgar Allan Poe",
            genre: "Horror",
            description: "A gothic tale of psychological horror and decay. A visitor arrives at the decaying mansion of his old friend Roderick Usher, only to witness the unraveling of his mind and family.",
            image: "ebooks library/The Fall of the House of Usher/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/6nd248"
        },
        {
            id: 8,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Fiction",
            description: "Set in the Jazz Age, this novel follows the mysterious millionaire Jay Gatsby and his obsessive quest to reunite with his lost love, Daisy Buchanan.",
            image: "ebooks library/The Great Gatsby/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/82djkj"
        },
        {
            id: 9,
            title: "The Legend of Sleepy Hollow",
            author: "Washington Irving",
            genre: "Horror",
            description: "A classic American short story featuring Ichabod Crane and the mysterious Headless Horseman. Suspense and supernatural elements build in this tale of terror and intrigue.",
            image: "ebooks library/The Legend of Sleepy Hollow/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/gr6ged"
        },
        {
            id: 10,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            description: "A masterpiece exploring themes of racial injustice and moral growth. Through the eyes of young Scout, we witness her father's fight for justice in the American South.",
            image: "ebooks library/To Kill a Mockingbird — Harper Lee/cover.jpg",
            download_link: "https://lockedapp.org/cl/i/pqog7n"
        }
    ];


// Dark Mode Toggle - FIXED
    function toggleDarkMode() {
        const html = document.documentElement;
        const themeIcon = document.getElementById('themeIcon');
        
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }
    // Initialize Dark Mode on Page Load
    function initDarkMode() {
        const html = document.documentElement;
        const themeIcon = document.getElementById('themeIcon');
        const savedTheme = localStorage.getItem('theme');
        
        // Check saved preference first, then system preference
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            html.classList.remove('dark');
            themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
    

let filteredBooks = [...books];
    // Render Books
    function renderBooks(booksToRender) {
        const grid = document.getElementById('booksGrid');
        const noResults = document.getElementById('noResults');
        
        if (booksToRender.length === 0) {
            grid.innerHTML = '';
            noResults.classList.remove('hidden');
            return;
        }
        noResults.classList.add('hidden');
        grid.innerHTML = '';
        booksToRender.forEach(book => {
            const card = document.createElement('div');
            card.className = 'bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700';
            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}" class="w-full h-64 object-contain bg-gray-100 dark:bg-gray-800">
                <div class="p-4">
                    <h4 class="font-semibold text-black dark:text-white mb-1 line-clamp-1">${book.title}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">${book.author}</p>
                    <p class="text-xs bg-gray-600 dark:bg-gray-800 text-white dark:text-gray-200 px-3 p-1.5 rounded-xl mb-3 inline-block border border-gray-300 dark:border-gray-600">${book.genre}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">${book.description}</p>
                    <button onclick="openModal(${book.id})" class="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black py-2 rounded transition font-semibold">
                        More Info
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    // Search Function
    function searchBooks(query) {
        const genreFilter = document.getElementById('genreFilter').value;
        filteredBooks = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(query.toLowerCase());
            const matchesGenre = !genreFilter || book.genre === genreFilter;
            return matchesSearch && matchesGenre;
        });
        renderBooks(filteredBooks);
    }
    // Filter by Genre
    function filterByGenre(genre) {
        const searchQuery = document.getElementById('searchInput').value;
        filteredBooks = books.filter(book => {
            const matchesGenre = !genre || book.genre === genre;
            const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesGenre && matchesSearch;
        });
        renderBooks(filteredBooks);
    }
    
    // Modal Functions
    function openModal(bookId) {
        const book = books.find(b => b.id === bookId);
        if (!book) return;
        
        // Store the current book's download link
        currentBookDownloadLink = book.download_link;
        
        document.getElementById('modalTitle').textContent = book.title;
        document.getElementById('modalAuthor').textContent = book.author;
        document.getElementById('modalGenre').textContent = book.genre;
        document.getElementById('modalDescription').textContent = book.description;
        document.getElementById('modalImage').src = book.image;
        document.getElementById('downloadBtn').href = book.download_link
        
        document.getElementById('bookModal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.getElementById('bookModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    // Close modal when clicking outside
    document.getElementById('bookModal').addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.id === 'bookModal') {
            closeModal();
        }
    });
    // Event Listeners
    document.getElementById('searchInput').addEventListener('input', (e) => searchBooks(e.target.value));
    document.getElementById('genreFilter').addEventListener('change', (e) => filterByGenre(e.target.value));
    // Initialize on page load
    initDarkMode();
    renderBooks(books);