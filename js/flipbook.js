$(document).ready(function() {
    var flipbook = $('#flipbook').flipBook({
        width: 800,
        height: 600,
        // Other options as needed
    });

    $('#prev').click(function() {
        flipbook.flipBook('prev');
    });

    $('#next').click(function() {
        flipbook.flipBook('next');
    });

    // Update page number
    flipbook.on('pageChanged', function(event, pageNumber) {
        $('#page-number').text(pageNumber);
    });

    // Download current page
    $('#download').click(function() {
        // Assuming the flipbook library provides a method to get the current page as an image
        var currentPage = flipbook.flipBook('getCurrentPageImage'); // Modify as needed based on library

        if (currentPage) {
            var link = document.createElement('a');
            link.href = currentPage;
            link.download = 'page-' + $('#page-number').text() + '.png';
            link.click();
        } else {
            alert('Failed to retrieve the current page image.');
        }
    });
});
