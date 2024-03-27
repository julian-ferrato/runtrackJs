$(document).ready(function() {
    // Initialisation des variables
    var tiles = $('.tile');
    var emptyTile = $('#emptyTile');
    var message = $('#message');

    // Mélange aléatoire des carreaux
    function shuffleTiles() {
        tiles.sort(() => Math.random() - 0.5).appendTo('#gameBoard');
    }

    // Vérification si le joueur a gagné
    function checkWin() {
        var win = true;
        tiles.each(function(index) {
            if ($(this).attr('id') !== 'tile' + (index + 1)) {
                win = false;
                return false;
            }
        });

        if (win) {
            message.text('Vous avez gagné !').css('color', 'green');
            tiles.off('click');
        }
    }

    // Déplacement d'un carreau
    function moveTile(tile) {
        var tileId = tile.attr('id');
        var emptyTilePosition = emptyTile.position();
        var tilePosition = tile.position();

        // Vérifier si le carreau est adjacent à la case vide
        if ((Math.abs(tilePosition.left - emptyTilePosition.left) === 100 && tilePosition.top === emptyTilePosition.top) ||
            (Math.abs(tilePosition.top - emptyTilePosition.top) === 100 && tilePosition.left === emptyTilePosition.left)) {
            // Échanger les positions
            tile.css({ 'position': 'absolute', 'top': emptyTilePosition.top, 'left': emptyTilePosition.left });
            emptyTile.css({ 'top': tilePosition.top, 'left': tilePosition.left });
        }

        // Vérifier si le joueur a gagné
        checkWin();
    }

    // Gestion du clic sur les carreaux
    tiles.click(function() {
        moveTile($(this));
    });

    // Gestion du clic sur le bouton "Recommencer"
    $('#resetButton').click(function() {
        shuffleTiles();
        message.text('').css('color', '');
    });

    // Initialisation du jeu au chargement de la page
    shuffleTiles();
});
