$(document).ready(function() {
    console.log("Loaded!")

    // function openModalfor(element) {
    //     alert('Okay');
    // }
    // $('div').on('click', function() {
    //     openModalfor(this)
    // });

    const totalChars = 140;                      //inital permitted chars number

    $('#tweet-text').on('input', function() {

        const charCount = $(this).val().length;      //total length of input

        const tweetdiv = $(this).next();             //Traverse to the sibling

        const counter = tweetdiv.find('output')      //In silbing find output element

        const remainingChars = totalChars - charCount; //setting the new count
        $(counter).text(remainingChars);

        if(remainingChars < 0) {
            $(counter).addClass('counter-negative');
        } else {
            $(counter).removeClass('counter-negative')
        }
    })
});




