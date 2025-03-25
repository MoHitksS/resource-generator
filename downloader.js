const fs = require("fs");
const https = require("https");
const path = require("path");
require("dotenv").config();


let fileLoaderObject =  {
    "available_games": [{
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/black_wolf_2/bng.v24.12.5/",
        "name": "black_wolf_2",
        "title": "Black Wolf 2"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/coin_up/bng.v24.12.3/",
        "name": "coin_up",
        "title": "Coin UP : Hot Fire"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/tigers_gold/bng.v24.9.8/",
        "name": "tigers_gold",
        "title": "Tiger\u2019s Gold"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_ratpack/777_fruity_classic/bng.v24.10.10/",
        "name": "777_fruity_classic",
        "title": "777 Fruity Classic"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/coin_lightning/bng.v24.12.3/",
        "name": "coin_lightning",
        "title": "Coin UP : Lightning"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/lamp_of_wonder/bng.v25.2.1/",
        "name": "lamp_of_wonder",
        "title": "Lamp of Wonder"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/hawaii_riches/bng.v24.11.7/",
        "name": "hawaii_riches",
        "title": "Hawaii Riches"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/grab_more_gold/bng.v24.11.6/",
        "name": "grab_more_gold",
        "title": "Grab more Gold!"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_hraymo/olaf_viking/bng.v24.4.6/",
        "name": "olaf_viking",
        "title": "Olaf Viking"
    }, {
        "client_url": "https://static.bng.games/gs/clients_kendoo/3_coin_volcanoes/bng.v25.3.5/",
        "name": "3_coin_volcanoes",
        "title": "3 Coin Volcanoes"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_ratpack/3_clover_pots/bng.v24.11.7/",
        "name": "3_clover_pots",
        "title": "3 Clover Pots"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/fishing_bear/bng.v24.12.3/",
        "name": "fishing_bear",
        "title": "Fishin\u2019 Bear"
    }, {
        "client_url": "https://static.bng.games/gs/clients_ratpack/3_clover_pots_extra/bng.v25.3.7/",
        "name": "3_clover_pots_extra",
        "title": "3 Clover Pots Extra"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/thunder_of_olympus/bng.v24.9.5/",
        "name": "thunder_of_olympus",
        "title": "Thunder of Olympus"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/3_aztec_temples/bng.v25.3.5/",
        "name": "3_aztec_temples",
        "title": "3 Aztec Temples"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/super_sticky_piggy/bng.v24.12.3/",
        "name": "super_sticky_piggy",
        "title": "Super Sticky Piggy"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/goddess_of_egypt/bng.v25.2.1/",
        "name": "goddess_of_egypt",
        "title": "Goddess of Egypt"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/dragon_wealth/bng.v24.9.2/",
        "name": "dragon_wealth",
        "title": "Dragon Wealth"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/super_rich_god/bng.v24.9.5/",
        "name": "super_rich_god",
        "title": "Super Rich God"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/gold_nuggets/bng.v24.9.2/",
        "name": "gold_nuggets",
        "title": "Gold Nuggets"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/lotus_charm/bng.v24.10.4/",
        "name": "lotus_charm",
        "title": "Lotus Charm"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_hraymo/amazonia_spirit/bng.v24.9.2/",
        "name": "amazonia_spirit",
        "title": "Amazonia Spirit"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_ratpack/fortune_globe/bng.v24.11.7/",
        "name": "fortune_globe",
        "title": "Fortune Globe"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_hraymo/3_african_drums/bng.v24.12.15/",
        "name": "3_african_drums",
        "title": "3 African Drums"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/sun_of_egypt_2/bng.v25.3.2/",
        "name": "sun_of_egypt_2",
        "title": "Sun of Egypt 2"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/power_sun/bng.v25.3.5/",
        "name": "power_sun",
        "title": "Power Sun"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/sun_of_egypt/bng.v24.11.5/",
        "name": "sun_of_egypt",
        "title": "Sun of Egypt"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/lucky_penny/bng.v25.2.13/",
        "name": "lucky_penny",
        "title": "Lucky Penny"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/green_chilli_2/bng.v25.3.2/",
        "name": "green_chilli_2",
        "title": "Green Chilli 2"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/3_egypt_chests/bng.v24.11.5/",
        "name": "3_egypt_chests",
        "title": "3 Egypt Chests"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/sun_of_egypt_3/bng.v24.11.5/",
        "name": "sun_of_egypt_3",
        "title": "Sun of Egypt 3"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_ratpack/lava_coins/bng.v24.11.4/",
        "name": "lava_coins",
        "title": "Lava Coins"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/buddha_fortune/bng.v24.11.1/",
        "name": "buddha_fortune",
        "title": "Buddha Fortune"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/coin_lamp/bng.v25.3.9/",
        "name": "coin_lamp",
        "title": "Coin Lamp"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/queen_of_the_sun/bng.v24.9.5/",
        "name": "queen_of_the_sun",
        "title": "Queen of the Sun"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/15_dragon_pearls/bng.v25.2.4/",
        "name": "15_dragon_pearls",
        "title": "15 Dragon Pearls"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/book_of_sun_multichance/bng.v24.8.9/",
        "name": "book_of_sun_multichance",
        "title": "Book of Sun: Multichance"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/caishen_wealth/bng.v24.9.8/",
        "name": "caishen_wealth",
        "title": "Caishen Wealth"
    }, {
        "client_url": "https://static.bng.games/gs/clients_kendoo/black_wolf/bng.v25.3.5/",
        "name": "black_wolf",
        "title": "Black Wolf"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/china_festival/bng.v25.2.1/",
        "name": "china_festival",
        "title": "China Festival"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_hraymo/golden_teapot/bng.v24.11.9/",
        "name": "golden_teapot",
        "title": "Golden Teapot"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/sky_coins/bng.v25.2.1/",
        "name": "sky_coins",
        "title": "Sky Coins"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/rocket_wins/bng.v25.2.8/",
        "name": "rocket_wins",
        "title": "Rocket Wins"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/happy_fish/bng.v24.4.2/",
        "name": "happy_fish",
        "title": "Happy Fish"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/golden_dancing_lion/bng.v24.4.2/",
        "name": "golden_dancing_lion",
        "title": "Golden Dancing Lion"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/3_china_pots/bng.v25.2.13/",
        "name": "3_china_pots",
        "title": "3 China Pots"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/rio_gems/bng.v24.11.10/",
        "name": "rio_gems",
        "title": "Rio Gems"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/lady_fortune/bng.v25.2.1/",
        "name": "lady_fortune",
        "title": "Lady Fortune"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/3_hot_chillies/bng.v24.12.3/",
        "name": "3_hot_chillies",
        "title": "3 Hot Chillies"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/super_hot_chilli/bng.v24.11.6/",
        "name": "super_hot_chilli",
        "title": "Super Hot Chilli"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/lion_coins/bng.v24.9.2/",
        "name": "lion_coins",
        "title": "Lion Coins"
    }, {
        "client_url": "https://static.bng.games/gs/clients_kendoo/sticky_piggy/bng.v25.3.5/",
        "name": "sticky_piggy",
        "title": "Sticky Piggy"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/aztec_fire_2/bng.v24.12.5/",
        "name": "aztec_fire_2",
        "title": "Aztec Fire 2"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/dragon_pearls/bng.v24.9.5/",
        "name": "dragon_pearls",
        "title": "Dragon Pearls"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_ratpack/sky_pearls/bng.v24.11.7/",
        "name": "sky_pearls",
        "title": "Sky Pearls"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_hraymo/storm_of_olympus/bng.v24.11.9/",
        "name": "storm_of_olympus",
        "title": "Storm Of Olympus"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/boom_gold/bng.v24.12.5/",
        "name": "boom_gold",
        "title": "Boom! Boom! Gold!"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/hot_fire_fruits/bng.v24.10.11/",
        "name": "hot_fire_fruits",
        "title": "Hot Fire Fruits"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/sunlight_princess/bng.v24.9.2/",
        "name": "sunlight_princess",
        "title": "Sunlight Princess"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/aztec_fire/bng.v25.2.7/",
        "name": "aztec_fire",
        "title": "Aztec Fire"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/3_pots_of_egypt/bng.v24.11.5/",
        "name": "3_pots_of_egypt",
        "title": "3 Pots of Egypt"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/sun_of_egypt_4/bng.v25.3.2/",
        "name": "sun_of_egypt_4",
        "title": "Sun of Egypt 4"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_ratpack/african_spirit_sticky_wilds/bng.v24.10.10/",
        "name": "african_spirit_sticky_wilds",
        "title": "African Spirit Sticky Wilds"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/more_magic_apple/bng.v24.11.5/",
        "name": "more_magic_apple",
        "title": "More Magic Apple"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/crystal_scarabs/bng.v24.12.1/",
        "name": "crystal_scarabs",
        "title": "Crystal Scarabs"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/yo_ho_gold/bng.v24.9.8/",
        "name": "yo_ho_gold",
        "title": "Yo-Ho Gold!"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/coin_volcano/bng.v24.12.3/",
        "name": "coin_volcano",
        "title": "Coin Volcano"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/little_farm/bng.v24.12.1/",
        "name": "little_farm",
        "title": "Little Farm"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/777_coins/bng.v24.11.5/",
        "name": "777_coins",
        "title": "777 Coins"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/forest_spirit/bng.v24.12.1/",
        "name": "forest_spirit",
        "title": "Forest Spirit"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/tiger_gems/bng.v24.12.5/",
        "name": "tiger_gems",
        "title": "Tiger Gems"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/grab_the_gold/bng.v25.1.3/",
        "name": "grab_the_gold",
        "title": "Grab the Gold!"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/maya_sun/bng.v24.9.2/",
        "name": "maya_sun",
        "title": "Maya Sun"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/egypt_fire/bng.v24.11.10/",
        "name": "egypt_fire",
        "title": "Egypt Fire"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/book_of_sun/bng.v24.8.9/",
        "name": "book_of_sun",
        "title": "Book of Sun"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/big_heist/bng.v24.12.1/",
        "name": "big_heist",
        "title": "Big Heist"
    }, {
        "client_url": "https://static.bng.games/gs/clients_goreel/green_chilli/bng.v25.3.2/",
        "name": "green_chilli",
        "title": "Green Chilli"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/hit_more_gold/bng.v24.11.6/",
        "name": "hit_more_gold",
        "title": "Hit more Gold"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/eggs_of_gold/bng.v24.9.6/",
        "name": "eggs_of_gold",
        "title": "Eggs of Gold"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/magic_apple_2/bng.v24.11.5/",
        "name": "magic_apple_2",
        "title": "Magic Apple 2"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/pearl_diver_2/bng.v24.12.1/",
        "name": "pearl_diver_2",
        "title": "Pearl Diver 2: Treasure Chest"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/book_of_wizard_crystal/bng.v24.12.1/",
        "name": "book_of_wizard_crystal",
        "title": "Book of Wizard: Crystal Chance"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/candy_boom/bng.v25.2.1/",
        "name": "candy_boom",
        "title": "Candy Boom"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/gold_express/bng.v24.9.2/",
        "name": "gold_express",
        "title": "Gold Express"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/lord_fortune_2/bng.v25.2.1/",
        "name": "lord_fortune_2",
        "title": "Lord Fortune 2"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/tiger_jungle/bng.v24.11.6/",
        "name": "tiger_jungle",
        "title": "Tiger Jungle"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/wolf_night/bng.v24.11.6/",
        "name": "wolf_night",
        "title": "Wolf Night"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/book_of_wizard/bng.v24.12.1/",
        "name": "book_of_wizard",
        "title": "Book Of Wizard"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/3_coins_egypt/bng.v24.10.10/",
        "name": "3_coins_egypt",
        "title": "3 Coins: Egypt"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/scarab_boost/bng.v24.9.5/",
        "name": "scarab_boost",
        "title": "Scarab Boost"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/pearl_diver/bng.v24.12.1/",
        "name": "pearl_diver",
        "title": "Pearl Diver"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/wukong/bng.v24.9.8/",
        "name": "wukong",
        "title": "Wukong"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/hit_the_gold/bng.v24.11.6/",
        "name": "hit_the_gold",
        "title": "Hit the Gold"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/magic_apple/bng.v24.11.5/",
        "name": "magic_apple",
        "title": "Magic Apple"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/magic_ball/bng.v24.9.8/",
        "name": "magic_ball",
        "title": "Magic Ball"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/tiger_stone/bng.v24.9.1/",
        "name": "tiger_stone",
        "title": "Tiger Stone"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/3_coins/bng.v24.11.5/",
        "name": "3_coins",
        "title": "3 Coins"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/eye_of_gold/bng.v24.9.8/",
        "name": "eye_of_gold",
        "title": "Eye of Gold"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_kendoo/wolf_saga/bng.v24.12.1/",
        "name": "wolf_saga",
        "title": "Wolf Saga"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/scarab_temple/bng.v24.11.6/",
        "name": "scarab_temple",
        "title": "Scarab Temple"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/aztec_sun/bng.v24.11.6/",
        "name": "aztec_sun",
        "title": "Aztec Sun"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/super_marble/bng.v24.9.5/",
        "name": "super_marble",
        "title": "Super Marble"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/moon_sisters/bng.v24.9.5/",
        "name": "moon_sisters",
        "title": "Moon Sisters"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/book_of_sun_choice/bng.v25.2.1/",
        "name": "book_of_sun_choice",
        "title": "Book of Sun: Choice"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/777_gems_respin/bng.v24.8.9/",
        "name": "777_gems_respin",
        "title": "777 Gems Respin"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/great_panda/bng.v24.9.6/",
        "name": "great_panda",
        "title": "Great Panda"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/olympian_gods/bng.v24.9.5/",
        "name": "olympian_gods",
        "title": "Olympian Gods"
    }, {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/scarab_riches/bng.v24.9.5/",
        "name": "scarab_riches",
        "title": "Scarab Riches"
    }],
    "desktop": {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/eggs_of_gold/bng.v24.9.6/",
        "log_url": "//betman.c2.bng.games/vinus-platform/log/eggs_of_gold/desktop/{QUEUE}/prod/",
        "revision": "22c16309",
        "server_url": "//betman.c2.bng.games/vinus-platform/gs/eggs_of_gold/desktop/{QUEUE}/prod/",
        "use_cdn": true
    },
    "gr": {
        "revision": "943017da",
        "static_path": "https://static.bng.games/gs/gamerunner/5.9.9/",
        "use_cdn": true
    },
    "log_url": "//betman.c2.bng.games/vinus-platform/log/",
    "mobile": {
        "client_url": "https://static-s3.bng.games/gs/clients_goreel/eggs_of_gold/bng.v24.9.6/",
        "log_url": "//betman.c2.bng.games/vinus-platform/log/eggs_of_gold/mobile/{QUEUE}/prod/",
        "revision": "22c16309",
        "server_url": "//betman.c2.bng.games/vinus-platform/gs/eggs_of_gold/mobile/{QUEUE}/prod/",
        "use_cdn": true
    },
    "options": {
        "allow_autoplay": "1",
        "allow_gamble": "1",
        "allow_shop": "1",
        "autoplay_menu_bet_change": "0",
        "autoplay_menu_loss_limit": "0",
        "autoplay_menu_rounds": [5, 10, 25, 50, 75, 100],
        "autoplay_menu_single_win_limit": "0",
        "cashier_url": "",
        "cashier_url_blank": "0",
        "cta_url": "",
        "disable_autogame_in_bonus_game": "0",
        "disable_buy_bonus": "0",
        "disable_gold_bet": "0",
        "disable_reel_skipping": "0",
        "disable_spin_on_play": "0",
        "exit_url": "",
        "game_name": "eggs_of_gold",
        "glory_to_ukraine": "0",
        "history_url": "https://gate.c2.bng.games/op/vinus/history.html#show=transactions\u0026header=0\u0026exceeds=0\u0026start_date=\u0026end_date=\u0026player_id=vn25157393185384\u0026game_id=269\u0026currency=KRW\u0026mode=REAL\u0026brand=Vinus\u0026tz=0\u0026lang=ko",
        "hyper_url": "https://promo-api.hyper.bng.games/process/",
        "i18n": {
            "bg": "Eggs of Gold",
            "de": "Eggs of Gold",
            "el": "Eggs of Gold",
            "en": "Eggs of Gold",
            "en-soc": "Eggs of Gold",
            "es": "Eggs of Gold",
            "fi": "Eggs of Gold",
            "fr": "Eggs of Gold",
            "id": "Eggs of Gold",
            "it": "Eggs of Gold",
            "ja": "Eggs of Gold",
            "ko": "Eggs of Gold",
            "nl": "Eggs of Gold",
            "no": "Eggs of Gold",
            "pt": "Eggs of Gold",
            "ro": "Eggs of Gold",
            "ru": "Eggs of Gold",
            "sv": "Eggs of Gold",
            "th": "\u0e41\u0e2e\u0e1b\u0e1b\u0e35\u0e49\u0e40\u0e1a\u0e34\u0e23\u0e4c\u0e14\u0e04\u0e32\u0e23\u0e4c\u0e19\u0e34\u0e27\u0e31\u0e25",
            "tr": "Eggs of Gold",
            "uk": "Eggs of Gold",
            "vi": "Eggs of Gold",
            "zh": "\u5feb\u4e50\u9e1f\u5609\u5e74\u534e",
            "zh-hant": "\u5feb\u6a02\u9ce5\u5609\u5e74\u83ef"
        },
        "incognito": "0",
        "lang": "ko",
        "min_spin_time": 0,
        "mobile": "0",
        "ping_interval": 30,
        "ping_url": "",
        "profile": "default",
        "project_uid": "4038",
        "provider": "bng",
        "queue": "a9510e1a7c48433ca780b8d256df2f7b",
        "quickspin": "1",
        "reality_check_interval": 0,
        "replay_url": "//betman.c2.bng.games/vinus-platform/api/vc/replay/create/",
        "round_expire": 90,
        "session_idle_timeout": 600,
        "show_autoplay_menu": "0",
        "show_button_explanations_in_common_rules": "0",
        "show_compliance_version": "0",
        "show_demo_mode_in_game": "0",
        "show_game_name": "0",
        "show_max_exposure_in_common_rules": "0",
        "show_min_max_bet_in_common_rules": "0",
        "show_net_position": "0",
        "show_paytable_on_start": "0",
        "show_rtp_in_common_rules": "0",
        "show_rtp_in_game": "0",
        "show_session_time": "0",
        "show_time": "0",
        "show_winnings": "0",
        "sound": "1",
        "title": "",
        "token": "ef46f99f4ff342ca9e7e3003b0bfbd2c_2072_Vinus:vn25157393185384",
        "wl": "prod"
    },
    "sentry_url": "//betman.c2.bng.games/vinus-platform/snt/",
    "static_domains": {
        "domains_url": "//betman.c2.bng.games/vinus-platform/cdn_domain/",
        "force_domain": "",
        "log_url": "//betman.c2.bng.games/vinus-platform/log/eggs_of_gold/desktop/measure_checker/prod/",
        "metric_url": "/static/games/cdn_measure.png",
        "timeout": "3000"
    }
}

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// take this object from game.blade.php after creating and replace it upside

function downloadAndSaveFile(sourceUrl, destinationPath, mypath, filename) {
    const excludeFiles = [] // const excludeFiles = ['gr.js', "index.js"]
  if (!fs.existsSync(mypath)) {
    fs.mkdirSync(mypath, { recursive: true });
  }else{
    if(excludeFiles.some((file) => filename == file)){
        console.log("File Already Included If you Want to add This file remove file from array inside excludeFiles")
        console.log("-------------------------------------------------------",filename, "------------------------------------")
        return
    }
  }
  
  const file = fs.createWriteStream(destinationPath, { flags: "w" });

  https
    .get(sourceUrl, (response) => {
      if (response.statusCode !== 200) {
        console.error(`Failed to download: ${response.statusCode}`);
        return;
      }

      response.pipe(file);

      file.on("finish", () => {
        file.close();
        console.log(`File saved to: ${destinationPath}`);
      });
    })
    .on("error", (error) => {
      console.error("Error downloading file:", error);
    });
}

// let resourcearray = []

function installDynamicData(resource, game_path) {
  resource.forEach((url) => {
    const sourceUrl = url.static_path;
    let mypath = `${game_path}${url.installPath}`;
    let filename = url.filename
    const destinationPath = path.join(mypath, filename);
    downloadAndSaveFile(sourceUrl, destinationPath, mypath, filename);
  });
}

// let game_path = 'E:/Bs/Booongo/parsing-game-app/public/Booongo/Buddha_Fortune/static.bng.games/gs/gamerunner/5.9.8/'
// installDynamicData(resourcearray,game_path)

// Read and parse HAR file
function readHarFile(dirLocation, loaderFile, harFile, preDataFile, dirPath, gameName) {
  try {
    // Read Har file content
    let harFilePath = dirLocation+harFile
    const harContent = fs.readFileSync(harFilePath, "utf8");
    const harData = JSON.parse(harContent);

    // Extract entries
    const entries = harData.log.entries;

    let resource = [];

    // Use This for making backward \ slash to forward / slash
    // http://mtbink.com/utility/convert-backslash-to-forward-slash.html

    

    let game_path = `${dirPath}public/Booongo/${gameName}/static.bng.games/`;
    entries.forEach((entry, index) => {
      let splitUrl = entry.request.url.split("/");
      let checkPreData  = entry.request["queryString"] && entry.request["queryString"].length > 0 &&
      entry.request["queryString"][0]["name"] && entry.request["queryString"][0]["name"] == "gsc" && entry.request["queryString"][0]["value"] == "start" 
      
      if(checkPreData){
        let res = storePreDataFile(entry, dirLocation, preDataFile)
        console.log(res)
      }

      let checkIndexFile =
        entry.request["queryString"] && entry.request["queryString"].length > 0 &&
        entry.request["queryString"][0]["name"] && entry.request["queryString"][0]["name"] == "token" &&
        entry.request["queryString"][0]["value"] != "";
      if (checkIndexFile) {
        let indexFilePath = `${dirPath}resources/views/Booongo/${gameName}/`;
        let content = entry.response.content.text;
        let res = createIndexFile(indexFilePath, content, gameName, loaderFile);
      }
    
      if (splitUrl[2] == "static.bng.games") {
        let filename = splitUrl[splitUrl.length - 1].split("?")[0];
        let static_path = entry.request.url;
        let excludeParts = [
          "https://static.bng.games/",
          splitUrl[splitUrl.length - 1],
        ];
        let installPath = getInstallPath(static_path, excludeParts);
        resource.push({ static_path, filename, installPath });
      }
    });

    if (resource.length > 0 && game_path) {
      installDynamicData(resource, game_path)
    }
  } catch (error) {
    console.error("Error reading HAR file:", error.message);
  }
}

function getInstallPath(path, excludeParts = []) {
  try {
    // Exclude specified parts from the path
    excludeParts.forEach((part) => {
      path = path.replace(part, "");
    });

    return path;
  } catch (error) {
    console.error("Invalid URL", error);
    return null;
  }
}

function createIndexFile(indexFilePath, indexResponse, gameName, loaderFile) {
  if (!fs.existsSync(indexFilePath)) {
    fs.mkdirSync(indexFilePath, { recursive: true });
  }
  let destinationPath = indexFilePath + "game.blade.php";

  // Writing Game.Blade.php file
  let file = fs.writeFile(
    destinationPath,
    indexResponse,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("index.html added");
      }
    }
  );

  let game = gameName.replaceAll("_", " ");

  let loaderObject = fileLoaderObject;
  let gameObject = loaderObject.available_games.filter(
      (games) => (games.name).replaceAll("_", " ").replace(/(^\w|\s\w)/g, m => m.toUpperCase()) == game
    );
    console.log(gameObject)
  if (gameObject.length > 0) {
    let excludeFromObject = ["log_url", "hyper_url", "sentry_url", "domains_url"];
    let excludeParts = [
        "https://static.bng.games/",
        "https://static-s3.bng.games/",
    ];
    const {client_url} = gameObject[0]
    let installPath = getInstallPath(client_url, excludeParts);
    let newLoaderObject = iterateNestedObject(loaderObject,"",excludeFromObject);
    let changeObjectPaths = ['desktop', "mobile"]
    changeObjectPaths.forEach((path) => {
        newLoaderObject[path]["client_url"] = `{{asset('Booongo/${gameName}/static.bng.games/${installPath}')}}`
        newLoaderObject[path]["server_url"] = "{{ $booongoGameServerUrl }}/api/bng-site-eu/gs/prod/"
        newLoaderObject[path]["use_cdn"] = false
    })
    newLoaderObject['options']['lang'] = "{{ isset($lang) ? $lang : '' }}"
    newLoaderObject['options']['token'] = "{{ isset($token) ? $token : '' }}"
    newLoaderObject['gr']['use_cdn'] = false
    newLoaderObject['gr']['static_path'] = `{{ config('app.app_domain') }}/Booongo/${gameName}/static.bng.games/gs/gamerunner/5.9.9/`  // change gamerunner version only

    let indexDestinationPath = dirLocation+loaderFile

    // Writing Object File For Game.Blade.php
    file = fs.writeFile(
        indexDestinationPath,
        JSON.stringify(newLoaderObject),
        (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("loader File added");
        }
        }
    );
  }
}

function storePreDataFile(entry, dirLocation, preDataFile){
    let destinationPath = dirLocation + preDataFile
    let content = JSON.parse(entry.response.content.text)
    let real_id = entry.request.url.split("/",6).pop()
    let title = real_id.replaceAll("_", " ")
    title  = title.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    content["real_id"] = real_id
    content["game_name"] = title
    delete content['settings']["authenticity_link"]
    delete content['status']
    delete content['user']
    delete content['session_id']
    delete content['command']
    delete content['request_id']

    if(content){
        let file = fs.writeFile(
            destinationPath,
            JSON.stringify(content),
            (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Pre-Data added");
              }
            }
          );
        return 'PreData File Added'
    }
    return 'Pre Data File Not Added'
}

function iterateNestedObject(obj, parentKey = "", excludeFromObject) {
  // Iterate through each key in the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
      if (excludeFromObject.some((value) => value == key)) {
        delete obj[key];
      }
      // If the value is an object, recursively call the function
      if (typeof obj[key] === "object" && obj[key] !== null) {
        iterateNestedObject(obj[key], fullKey, excludeFromObject); // Recurse
      }
    }
  }
  return obj;
}

// Usage
let harFile = 'harFile.har'
let loaderFile = 'index.json'
let preDataFile = "pre-data.json"

let dirLocation = process.env.DIR_LOCATION; // use location where you putting this script
let dirPath = process.env.DIR_PATH // change frontend dir Path add yours
let gameName = process.env.GAME_NAME; // change game name according to game

readHarFile(dirLocation, loaderFile, harFile, preDataFile, dirPath, gameName);
