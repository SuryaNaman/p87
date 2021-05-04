var canvas = new fabric.Canvas("myCanvas");
var player = "";
var image = "";
player_x = 10;
player_y = 10;
image_w = 30;
image_h = 30;

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player = img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({ top: player_y, left: player_x });
        canvas.add(player);
    });
}

function new_image(get_img) {
    fabric.Image.fromURL(get_img, function(img) {
        image = img;
        image.scaleToWidth(block_w);
        image.scaleToHeight(block_h);
        image.set({ top: player_y, left: player_x });
        canvas.add(block);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '39') {
        right();
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    if (keypressed == '66') {
        new_image('spiderman_body.png');
        console.log("b");
    }
    if (keypressed == '76') {
        new_image('hulk_legs.png');
        console.log("l");
    }
    if (keypressed == '82') {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if (keypressed == '72') {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }

}

function up() {
    if (player_y > 0) {
        player_y = player_y - image_h;
        canvas.remove(player);
        player_update()
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + image_h;
        canvas.remove(player);
        player_update()
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - image_w;
        canvas.remove(player);
        player_update()
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + image_w;
        canvas.remove(player);
        player_update()
    }
}