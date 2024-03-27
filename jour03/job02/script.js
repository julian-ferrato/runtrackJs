$(document).ready(function() {
    const $rainbowContainer = $('#rainbow');
    const $shuffleButton = $('#shuffleButton');
    const $resultMessage = $('#resultMessage');

    $rainbowContainer.sortable({
        update: function() {
            checkRainbowOrder();
        }
    });

    $shuffleButton.on('click', function() {
        shuffleRainbow();
    });

    function checkRainbowOrder() {
        let isCorrect = true;
        $('.rainbow-img').each(function(index) {
            const expectedSrc = `arc${index + 1}.png`;
            if (!$(this).attr('src').includes(expectedSrc)) {
                isCorrect = false;
            }
        });

        if (isCorrect) {
            $resultMessage.text("Vous avez gagné").css('color', 'green');
        } else {
            $resultMessage.text("Vous avez perdu").css('color', 'red');
        }
    }

    function shuffleRainbow() {
        const $images = $('.rainbow-img').toArray();
        $images.sort(() => Math.random() - 0.5);
        $rainbowContainer.empty();
        $images.forEach(image => {
            $rainbowContainer.append(image);
        });

        checkRainbowOrder();
    }
});
