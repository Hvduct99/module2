let books = [];
function validateBookId(id) {
    const regex = /^[1-5][0-9]{4}$/;
    return regex.test(id);
}
function validatePublishYear(year) {
    return year >= 1000 && year <= 9999;
}
function validateBook(book) {
    let isValid = true;
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    if (!validateBookId(book.bookId)) {
        document.getElementById('bookIdError').style.display = 'block';
        isValid = false;
    }
    if (!book.bookTitle.trim()) {
        document.getElementById('bookTitleError').style.display = 'block';
        isValid = false;
    }
    if (!validatePublishYear(book.publishYear)) {
        document.getElementById('publishYearError').style.display = 'block';
        isValid = false;
    }
    if (book.quantity <= 0 || isNaN(book.quantity)) {
        document.getElementById('quantityError').style.display = 'block';
        isValid = false;
    }
    return isValid;
}
function showMostBooks() {
    const successMessage = document.getElementById('successMessage');
    const mostBooksList = document.getElementById('mostBooksList');
    successMessage.textContent = '';
    mostBooksList.innerHTML = '';
    mostBooksList.style.display = 'none';

    if (books.length === 0) {
        successMessage.textContent = 'Chưa có sách nào.';
    } else {
        const maxQuantity = Math.max(...books.map(book => book.quantity));
        const mostBooks = books.filter(book => book.quantity === maxQuantity);

        successMessage.textContent = 'Sách có số quyển nhiều nhất:';
        mostBooksList.style.display = 'block';
        mostBooks.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.bookTitle} (${book.bookId}) - ${book.quantity} quyển`;
            mostBooksList.appendChild(li);
        });
    }

    document.getElementById('successModal').style.display = 'flex';
}
function renderBooks() {
    const tableBody = document.getElementById('bookTableBody');
    tableBody.innerHTML = '';
    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.bookId}</td>
            <td>${book.bookTitle}</td>
            <td>${book.publishYear}</td>
            <td>${book.quantity}</td>
            <td>${book.status ? 'Còn sách' : 'Hết sách'}</td>
            <td>
                <button class="borrow-btn" data-id="${book.bookId}" ${book.quantity === 0 ? 'disabled' : ''}>Mượn</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
    document.querySelectorAll('.borrow-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookId = this.getAttribute('data-id');
            borrowBook(bookId);
        });
    });
}
function borrowBook(bookId) {
    const book = books.find(b => b.bookId === bookId);
    if (!book || book.quantity === 0) {
        showSuccessMessage('Sách đã hết, không thể mượn!');
        return;
    }
    book.quantity -= 1;
    book.status = book.quantity > 0;
    renderBooks();
    showSuccessMessage(`Mượn sách ${book.bookTitle} thành công!`);
}
function showSuccessMessage(message) {
    document.getElementById('successMessage').textContent = message;
    document.getElementById('mostBooksList').style.display = 'none';
    document.getElementById('successModal').style.display = 'flex';
}
document.getElementById('addBookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const book = {
        bookId: document.getElementById('bookId').value,
        bookTitle: document.getElementById('bookTitle').value,
        publishYear: parseInt(document.getElementById('publishYear').value),
        quantity: parseInt(document.getElementById('quantity').value),
        status: true
    };

    if (validateBook(book)) {
        if (books.some(b => b.bookId === book.bookId)) {
            document.getElementById('bookIdError').textContent = 'Mã số sách đã tồn tại.';
            document.getElementById('bookIdError').style.display = 'block';
            return;
        }
        book.status = book.quantity > 0;
        books.push(book);
        renderBooks();
        document.getElementById('addBookModal').style.display = 'none';
        showSuccessMessage('Thêm sách thành công!');
        this.reset();
    }
});
document.getElementById('addBookBtn').addEventListener('click', function() {
    document.getElementById('addBookModal').style.display = 'flex';
    document.getElementById('addBookForm').reset();
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.getElementById('bookIdError').textContent = 'Mã số sách phải có 5 ký tự, ký tự đầu từ 1-5, các ký tự còn lại từ 0-9.';
});
document.getElementById('showMostBooksBtn').addEventListener('click', function() {
    showMostBooks();
});
document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('addBookModal').style.display = 'none';
    document.getElementById('addBookForm').reset();
});
document.getElementById('closeSuccessBtn').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});