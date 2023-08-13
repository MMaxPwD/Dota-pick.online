/* определяем драг элементы и дроп зоны */

let dragItems = document.querySelectorAll(".hero, .poolhero")/* все элементы .hero в документe являются dragitems.*/
const dropZones = document.querySelectorAll(".drophero, .drophero1")/* все элементы .drophero в документа являются dropzones*/
const roleBlock = document.querySelector(".role")
const poolBlock = document.querySelector(".poolhero")
const poolDiv = document.querySelector(".pool")

const heroDict = [
    {heroname: "t001_Admiral",foe: ["t050_Drow_ranger"],friends:["t034_Tidehunter","t097_Enigma"], role:["number4"]},// "number2""number1"
    {heroname: "t002_Beastmaster",foe: ["t074_Enchantress"],friends:["t097_Enigma","t061_Phantom_assassin","t079_Prophet"], role:["number3"]},//
    {heroname: "t003_Centaur_warchief",foe: ["t025_Lifestealer","t063_Soul_keeper","t108_Necro`lic"],friends:["t053_Vengeful_spirit","t073_Crystal_maiden"], role:["number3"]},//"number4"
    {heroname: "t004_Earthshaker",foe: ["t096_Demon_witch","t050_Drow_ranger","t095_Death_prophet","t080_Silencer"],friends:["t010_Treant_protector","t097_Enigma"], role:["number2"]},//"number4"
    {heroname: "t005_Omniknight",foe: ["t096_Demon_witch","t050_Drow_ranger","t095_Death_prophet","t080_Silencer","t022_Axe","t024_Doom_bringer"],friends:["t030_Pudge"], role:["number4"]},// "number2"
    {heroname: "t006_Pandaren_brewmaster",foe: ["t088_Tinker"],friends:["t089_Shadow_shaman","t097_Enigma"], role:["number4"]},//
    {heroname: "t007_Rogue_knight",foe: ["t096_Demon_witch","t089_Shadow_shaman"],friends:["t097_Enigma","t094_Dark_seer"], role:["number1"]},//
    {heroname: "t008_Stone_giant",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet"],friends:["t004_Earthshaker","t022_Axe","t097_Enigma","t086_Goblin_techies","t052_Ursa_warrior"], role:["number2"]},//
    {heroname: "t009_Tauren_chieftan",foe: ["t050_Drow_ranger","t080_Silencer"],friends:["t097_Enigma","t010_Treant_protector","t022_Axe"], role:["number4"]},//"number5"
    {heroname: "t010_Treant_protector",foe: ["t025_Lifestealer","t054_Bounty_hunter","t032_Slithereen_guard"],
    friends:["t070_Faceless_void","t061_Phantom_assassin","t052_Ursa_warrior","t050_Drow_ranger","t042_Moon_rider","t098_Lich"], role:["number4"]},//"number5"
    {heroname: "t011_Guardian_wisp",foe: ["t080_Silencer","t050_Drow_ranger","t024_Doom_bringer"],friends:["t070_Faceless_void","t061_Phantom_assassin","t052_Ursa_warrior","t050_Drow_ranger"], role:["number5"]},//
    {heroname: "t012_Alchemist",foe: ["t054_Bounty_hunter","t047_Stealth_assassin","t025_Lifestealer"],friends:["t093_Bane_elemental","t084_Disruptor","t022_Axe","t010_Treant_protector","t070_Faceless_void"], role:["number1"]},// "number2"
    {heroname: "t013_Clockwerk_goblin",foe: ["t045_Phantom_lancer","t044_Naga_siren"],friends:["t037_Sand_king","t096_Demon_witch","t046_Priestess_of_the_moon","t059_Nerubian_assassin"], role:["number3"]},//"number4"
    {heroname: "t014_Dragon_knight",foe: ["t080_Silencer","t081_Slayer","t025_Lifestealer"],friends:["t005_Omniknight","t106_Shadow_priest","t007_Rogue_knight"], role:["number1"]},// "number2""number3"
    {heroname: "t015_Sacred_warrior",foe: ["t099_Necrolyte","t081_Slayer","t042_Moon_rider","t096_Demon_witch"],friends:["t099_Necrolyte","t106_Shadow_priest"], role:["number2"]},// "number1""number4"
    {heroname: "t016_Bristleback",foe: ["t025_Lifestealer","t101_Obsidian_destroyer"],friends:["t005_Omniknight","t106_Shadow_priest"], role:["number3"]},//
    {heroname: "t017_Phoenix",foe: ["t067_Geomancer","t023_Chaos_knight","t044_Naga_siren"],friends:["t022_Axe","t097_Enigma","t010_Treant_protector","t034_Tidehunter"], role:["number4"]},// "number2""number5"
    {heroname: "t018_Ymir",foe: ["t038_Anti_mage","t050_Drow_ranger","t080_Silencer","t095_Death_prophet"],friends:["t097_Enigma","t022_Axe","t004_Earthshaker", "t003_Centaur_warchief", ], role:["number4"]},//
    {heroname: "t019_Legion_commander",foe: ["t036_Spiritbreaker","t048_Troll_warlord","t064_Spectre","t003_Centaur_warchief","t100_Oblivion"],friends:["t005_Omniknight","t081_Slayer","t091_Skywrath_mage","t022_Axe"], role:["number4"]},// "number2"
    {heroname: "t020_Goblin_shredder",foe: ["t100_Oblivion","t081_Slayer","t078_Lord_of_Olympia"],friends:["t097_Enigma","t010_Treant_protector","t022_Axe"], role:["number3"]},//
    {heroname: "t021_Earth_spirit",foe: ["t038_Anti_mage","t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t024_Doom_bringer"],friends:["t097_Enigma","t010_Treant_protector","t022_Axe"], role:["number4"]},//
    {heroname: "t022_Axe",foe: ["t096_Demon_witch","t081_Slayer","t078_Lord_of_Olympia"],friends:["t005_Omniknight","t094_Dark_seer"], role:["number4"]},// "number2""number3"
    {heroname: "t023_Chaos_knight",foe: ["t022_Axe","t007_Rogue_knight","t109_Tormented_soul"],friends:["t097_Enigma","t010_Treant_protector","t022_Axe"], role:["number1"]},//"number4"
    {heroname: "t024_Doom_bringer",foe: ["t045_Phantom_lancer","t044_Naga_siren"],friends:["t097_Enigma","t010_Treant_protector","t022_Axe"], role:["number3"]},//
    {heroname: "t025_Lifestealer",foe: ["t096_Demon_witch","t089_Shadow_shaman"],friends:["t036_Spiritbreaker","t047_Stealth_assassin"], role:["number1"]},// "number2"
    {heroname: "t026_Lord_of_Avernus",foe: ["t022_Axe","t099_Necrolyte"],friends:["t097_Enigma","t010_Treant_protector","t022_Axe"], role:["number1"]},//"number4"
    {heroname: "t027_Lycantrophe",foe: ["t022_Axe","t093_Bane_elemental","t056_Bloodseeker"],friends:["t079_Prophet","t097_Enigma","t103_Warlock"], role:["number1"]},//
    {heroname: "t028_Night_stalker",foe: ["t056_Bloodseeker","t048_Troll_warlord","t006_Pandaren_brewmaster"],friends:["t053_Vengeful_spirit","t073_Crystal_maiden"], role:["number3"]},//"number4"
    {heroname: "t029_Pit_lord",foe: ["t038_Anti_mage","t025_Lifestealer","t059_Nerubian_assassin","t096_Demon_witch"],friends:["t089_Shadow_shaman","t079_Prophet","t022_Axe"], role:["number3"]},//"number4"
    {heroname: "t030_Pudge",foe: ["t038_Anti_mage","t102_Queen_of_pain","t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t025_Lifestealer", "t099_Necrolyte"],
    friends:["t052_Ursa_warrior","t005_Omniknight","t022_Axe","t089_Shadow_shaman","t022_Axe","t096_Demon_witch","t086_Goblin_techies"], role:["number2"]},//"number4"
    {heroname: "t031_Skeleton_king",foe: ["t059_Nerubian_assassin","t038_Anti_mage","t096_Demon_witch"],friends:["t053_Vengeful_spirit","t073_Crystal_maiden"], role:["number1"]},//"number4"
    {heroname: "t032_Slithereen_guard",foe: ["t048_Troll_warlord","t070_Faceless_void","t096_Demon_witch","t089_Shadow_shaman", "t081_Slayer"],friends:["t048_Troll_warlord","t070_Faceless_void"], role:["number1"]},//"number4"
    {heroname: "t033_Undying",
    foe: ["t025_Lifestealer","t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t096_Demon_witch","t089_Shadow_shaman","t001_Admiral","t099_Necrolyte"],
    friends:["t073_Crystal_maiden","t077_Keeper_of_the_light"], role:["number4"]},//"number5"
    {heroname: "t034_Tidehunter",
    foe: ["t025_Lifestealer","t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t096_Demon_witch","t089_Shadow_shaman","t099_Necrolyte"],
    friends:["t037_Sand_king","t098_Lich","t001_Admiral", "t004_Earthshaker"], role:["number3"]},//
    {heroname: "t035_Magnataur",
    foe: ["t025_Lifestealer","t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t096_Demon_witch","t089_Shadow_shaman","t099_Necrolyte"],
    friends:["t037_Sand_king","t098_Lich","t001_Admiral", "t004_Earthshaker","t062_Shadow_fiend"], role:["number3"]},//
    {heroname: "t036_Spiritbreaker",foe: ["t056_Bloodseeker","t093_Bane_elemental","t104_Shadow_demon","t072_Arc_warden"],
    friends:["t005_Omniknight","t026_Lord_of_Avernus","t025_Lifestealer"], role:["number4"]},// "number2"
    {heroname: "t037_Sand_king",foe: ["t056_Bloodseeker","t081_Slayer","t107_Invoker","t030_Pudge","t032_Slithereen_guard"],friends:["t097_Enigma","t035_Magnataur","t022_Axe","t010_Treant_protector","t034_Tidehunter"], role:["number2"]},// "number4""number3"
    {heroname: "t038_Anti_mage",foe: ["t052_Ursa_warrior","t048_Troll_warlord","t036_Spiritbreaker","t032_Slithereen_guard"],friends:["t096_Demon_witch","t059_Nerubian_assassin","t077_Keeper_of_the_light"], role:["number1"]},//
    {heroname: "t039_Dwarven_sniper",foe: ["t054_Bounty_hunter","t047_Stealth_assassin","t032_Slithereen_guard","t081_Slayer","t045_Phantom_lancer"],friends:["t050_Drow_ranger","t053_Vengeful_spirit"], role:["number2"]},// "number1"
    {heroname: "t040_Juggernaut",foe: ["t026_Lord_of_Avernus","t045_Phantom_lancer","t044_Naga_siren"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number1"]},//
    {heroname: "t041_Lone_druid",foe: ["t098_Lich","t025_Lifestealer"],friends:["t053_Vengeful_spirit","t002_Beastmaster","t052_Ursa_warrior"], role:["number1"]},//
    {heroname: "t042_Moon_rider",foe: ["t038_Anti_mage","t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t024_Doom_bringer"],friends:["t050_Drow_ranger","t053_Vengeful_spirit" ], role:["number2"]},// "number1"
    {heroname: "t043_Morphling",foe: ["t050_Drow_ranger","t059_Nerubian_assassin","t024_Doom_bringer"],friends:["t089_Shadow_shaman","t110_Witch_doctor"], role:["number1"]},// "number2"//
    {heroname: "t044_Naga_siren",foe: ["t022_Axe","t003_Centaur_warchief","t007_Rogue_knight","t008_Stone_giant","t035_Magnataur"],friends:["t089_Shadow_shaman","t110_Witch_doctor","t052_Ursa_warrior"], role:["number1"]},// "number2""number3"
    {heroname: "t045_Phantom_lancer",foe: ["t022_Axe","t007_Rogue_knight","t008_Stone_giant","t035_Magnataur","t004_Earthshaker","t109_Tormented_soul"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number1"]},//
    {heroname: "t046_Priestess_of_the_moon",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t032_Slithereen_guard","t054_Bounty_hunter","t024_Doom_bringer"],friends:["t089_Shadow_shaman","t110_Witch_doctor","t052_Ursa_warrior","t004_Earthshaker","t035_Magnataur","t097_Enigma"], role:["number4"]},// "number2"
    {heroname: "t047_Stealth_assassin",foe: ["t032_Slithereen_guard","t054_Bounty_hunter","t024_Doom_bringer","t022_Axe","t003_Centaur_warchief"],friends:["t022_Axe","t034_Tidehunter"], role:["number4"]},// "number1"
    {heroname: "t048_Troll_warlord",foe: ["t022_Axe","t003_Centaur_warchief","t008_Stone_giant","t070_Faceless_void"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number1"]},// "number3"
    {heroname: "t049_Gyrocopter",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t104_Shadow_demon","t024_Doom_bringer"],friends:["t035_Magnataur","t097_Enigma","t034_Tidehunter","t008_Stone_giant"], role:["number4"]},// "number2"
    {heroname: "t050_Drow_ranger",foe: ["t003_Centaur_warchief","t008_Stone_giant","t047_Stealth_assassin","t030_Pudge"],friends:["t053_Vengeful_spirit","t042_Moon_rider"], role:["number1"]},// "number2"
    {heroname: "t051_Templar_assassin",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t030_Pudge","t003_Centaur_warchief","t008_Stone_giant","t004_Earthshaker","t032_Slithereen_guard","t054_Bounty_hunter","t022_Axe"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number2"]},//
    {heroname: "t052_Ursa_warrior",
    foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t015_Sacred_warrior","t047_Stealth_assassin","t054_Bounty_hunter","t066_Netherdrake","t046_Priestess_of_the_moon","t102_Queen_of_pain"],friends:["t026_Lord_of_Avernus","t005_Omniknight","t089_Shadow_shaman","t096_Demon_witch"], role:["number2"]},// "number1"
    {heroname: "t053_Vengeful_spirit",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t003_Centaur_warchief","t008_Stone_giant","t024_Doom_bringer","t038_Anti_mage","t028_Night_stalker"],friends:["t050_Drow_ranger","t042_Moon_rider"], role:["number4"]},// "number5"
    {heroname: "t054_Bounty_hunter",
    foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t030_Pudge","t003_Centaur_warchief","t008_Stone_giant","t081_Slayer","t032_Slithereen_guard","t028_Night_stalker"],
    friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number3"]},// "number4"
    {heroname: "t055_Ember_spirit",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t028_Night_stalker","t056_Bloodseeker","t059_Nerubian_assassin","t024_Doom_bringer","t038_Anti_mage"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number3"]},// "number2"
    {heroname: "t056_Bloodseeker",foe: ["t003_Centaur_warchief","t026_Lord_of_Avernus"],friends:["t030_Pudge","t053_Vengeful_spirit"], role:["number2"]},// "number1"
    {heroname: "t057_Bone_fletcher",foe: ["t003_Centaur_warchief","t008_Stone_giant","t081_Slayer","t032_Slithereen_guard","t054_Bounty_hunter","t089_Shadow_shaman","t096_Demon_witch","t078_Lord_of_Olympia","t024_Doom_bringer","t056_Bloodseeker"],friends:["t093_Bane_elemental","t053_Vengeful_spirit"], role:["number2"]},// "number1"
    {heroname: "t058_Broodmother",foe: ["t001_Admiral","t022_Axe","t081_Slayer","t030_Pudge","t032_Slithereen_guard","t054_Bounty_hunter","t078_Lord_of_Olympia","t004_Earthshaker","t056_Bloodseeker"],friends:["t053_Vengeful_spirit","t002_Beastmaster"], role:["number2"]},//
    {heroname: "t059_Nerubian_assassin",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t032_Slithereen_guard","t054_Bounty_hunter","t038_Anti_mage","t024_Doom_bringer","t056_Bloodseeker"],friends:["t077_Keeper_of_the_light"], role:["number3"]},// "number4"// "number2"// "number1"
    {heroname: "t060_Nerubian_weaver",foe: ["t032_Slithereen_guard","t054_Bounty_hunter","t056_Bloodseeker","t024_Doom_bringer","t101_Obsidian_destroyer"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number4"]},// "number3"
    {heroname: "t061_Phantom_assassin",foe: ["t003_Centaur_warchief","t081_Slayer","t101_Obsidian_destroyer","t048_Troll_warlord","t070_Faceless_void","t032_Slithereen_guard"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number1"]},// "number2"
    {heroname: "t062_Shadow_fiend",foe: ["t003_Centaur_warchief","t081_Slayer","t070_Faceless_void","t096_Demon_witch","t089_Shadow_shaman","t032_Slithereen_guard"],friends:["t097_Enigma","t035_Magnataur","t034_Tidehunter"], role:["number2"]},//
    {heroname: "t063_Soul_keeper",foe: ["t056_Bloodseeker","t081_Slayer","t101_Obsidian_destroyer","t070_Faceless_void","t050_Drow_ranger","t080_Silencer","t095_Death_prophet"],friends:["t099_Necrolyte","t056_Bloodseeker","t081_Slayer","t096_Demon_witch"], role:["number1"]},// "number4"
    {heroname: "t064_Spectre",foe: ["t038_Anti_mage","t081_Slayer","t101_Obsidian_destroyer","t089_Shadow_shaman","t096_Demon_witch","t093_Bane_elemental"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit","t078_Lord_of_Olympia","t065_Venomancer"], role:["number1"]},//
    {heroname: "t065_Venomancer",foe: ["t038_Anti_mage","t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t081_Slayer","t096_Demon_witch"],friends:["t022_Axe","t097_Enigma","t035_Magnataur","t004_Earthshaker","t062_Shadow_fiend","t078_Lord_of_Olympia"], role:["number3"]},// "number4""number2"
    {heroname: "t066_Netherdrake",foe: ["t038_Anti_mage"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number2"]},//
    {heroname: "t067_Geomancer",foe: ["t098_Lich","t035_Magnataur","t097_Enigma","t004_Earthshaker","t081_Slayer","t062_Shadow_fiend","t019_Legion_commander","t022_Axe"],friends:["t053_Vengeful_spirit","t002_Beastmaster","t089_Shadow_shaman","t096_Demon_witch"], role:["number1"]},// "number2"
    {heroname: "t068_Lighting_revenant",foe: ["t038_Anti_mage","t060_Nerubian_weaver","t045_Phantom_lancer","t023_Chaos_knight"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number3"]},// "number2"
    {heroname: "t069_Murloc_nightcrawler",foe: ["t024_Doom_bringer","t081_Slayer","t004_Earthshaker","t008_Stone_giant","t070_Faceless_void","t003_Centaur_warchief"],friends:["t005_Omniknight","t106_Shadow_priest","t089_Shadow_shaman"], role:["number1"]},// "number2"
    {heroname: "t070_Faceless_void",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t003_Centaur_warchief","t008_Stone_giant","t044_Naga_siren","t023_Chaos_knight"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit","t009_Tauren_chieftan"], role:["number1"]},//
    {heroname: "t071_Gorgon",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number1"]},//
    {heroname: "t072_Arc_warden",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer"],friends:["t019_Legion_commander"], role:["number1"]},// "number2"
    {heroname: "t073_Crystal_maiden",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t056_Bloodseeker"],friends:["t097_Enigma","t035_Magnataur","t004_Earthshaker"], role:["number4"]},// "number5"
    {heroname: "t074_Enchantress",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t056_Bloodseeker"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number2"]},// "number4"
    {heroname: "t075_Faeie_Dragon",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin"],friends:["t062_Shadow_fiend","t035_Magnataur","t037_Sand_king"], role:["number2"]},// "number3"
    {heroname: "t076_Holy_knight",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t019_Legion_commander"],friends:["t097_Enigma","t079_Prophet"], role:["number4"]},// "number5"
    {heroname: "t077_Keeper_of_the_light",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin"],friends:["t022_Axe","t097_Enigma","t089_Shadow_shaman"], role:["number5"]},// "number4"
    {heroname: "t078_Lord_of_Olympia",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker"],friends:["t073_Crystal_maiden","t100_Oblivion","t077_Keeper_of_the_light"], role:["number2"]},// "number3"
    {heroname: "t079_Prophet",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t070_Faceless_void"],friends:["t050_Drow_ranger","t110_Witch_doctor","t081_Slayer"], role:["number3"]},// "number4"
    {heroname: "t080_Silencer",foe: ["t038_Anti_mage","t059_Nerubian_assassin","t050_Drow_ranger","t024_Doom_bringer"],friends:["t089_Shadow_shaman","t096_Demon_witch","t007_Rogue_knight","t097_Enigma"], role:["number1"]},// "number2"// "number4"
    {heroname: "t081_Slayer",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t100_Oblivion"],friends:["t100_Oblivion"], role:["number2"]},//
    {heroname: "t082_Storm_spirit",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker"],friends:["t035_Magnataur","t077_Keeper_of_the_light","t073_Crystal_maiden","t025_Lifestealer"], role:["number2"]},// "number1"
    {heroname: "t083_Windrunner",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer"],friends:["t073_Crystal_maiden","t077_Keeper_of_the_light"], role:["number2"]},// "number3"
    {heroname: "t084_Disruptor",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t102_Queen_of_pain","t096_Demon_witch","t028_Night_stalker"],friends:["t097_Enigma","t037_Sand_king","t103_Warlock","t049_Gyrocopter"], role:["number4"]},// "number5"
    {heroname: "t085_Ogre_magi",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t096_Demon_witch"],friends:["t073_Crystal_maiden","t100_Oblivion","t077_Keeper_of_the_light"], role:["number4"]},// "number5"// "number3"
    {heroname: "t086_Goblin_techies",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t096_Demon_witch","t079_Prophet","t058_Broodmother","t041_Lone_druid"],friends:["t008_Stone_giant","t030_Pudge","t093_Bane_elemental"], role:["number4"]},// "number5"
    {heroname: "t087_Twin_head_dragon",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t056_Bloodseeker"],friends:["t073_Crystal_maiden","t100_Oblivion","t077_Keeper_of_the_light","t096_Demon_witch","t097_Enigma","t007_Rogue_knight"], role:["number5"]},// "number4"
    {heroname: "t088_Tinker",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t096_Demon_witch","t025_Lifestealer"],friends:["t096_Demon_witch","t081_Slayer","t007_Rogue_knight","t030_Pudge","t073_Crystal_maiden","t100_Oblivion","t077_Keeper_of_the_light"], role:["number2"]},//
    {heroname: "t089_Shadow_shaman",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t096_Demon_witch","t025_Lifestealer"],friends:["t052_Ursa_warrior","t048_Troll_warlord","t046_Priestess_of_the_moon","t030_Pudge","t061_Phantom_assassin"], role:["number4"]},//"number5"
    {heroname: "t090_Grand_magus",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t025_Lifestealer"],friends:["t086_Goblin_techies","t107_Invoker","t046_Priestess_of_the_moon","t030_Pudge","t073_Crystal_maiden","t077_Keeper_of_the_light","t079_Prophet","t103_Warlock"], role:["number4"]},//"number2"
    {heroname: "t091_Skywrath_mage",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t025_Lifestealer"],friends:["t096_Demon_witch","t081_Slayer","t109_Tormented_soul","t007_Rogue_knight","t097_Enigma","t084_Disruptor","t019_Legion_commander"], role:["number4"]},//"number2"
    {heroname: "t092_Oracle",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t025_Lifestealer","t089_Shadow_shaman"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number4"]},//"number2"
    {heroname: "t093_Bane_elemental",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t044_Naga_siren","t089_Shadow_shaman","t045_Phantom_lancer","t056_Bloodseeker"],friends:["t052_Ursa_warrior","t048_Troll_warlord","t046_Priestess_of_the_moon","t030_Pudge"], role:["number4"]},//
    {heroname: "t094_Dark_seer",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t028_Night_stalker"],friends:["t047_Stealth_assassin","t022_Axe","t054_Bounty_hunter","t070_Faceless_void","t035_Magnataur","t019_Legion_commander","t007_Rogue_knight"], role:["number3"]},//
    {heroname: "t095_Death_prophet",foe: ["t050_Drow_ranger","t080_Silencer","t038_Anti_mage","t059_Nerubian_assassin","t096_Demon_witch","t024_Doom_bringer","t089_Shadow_shaman","t056_Bloodseeker"],friends:["t007_Rogue_knight","t096_Demon_witch","t085_Ogre_magi","t035_Magnataur","t097_Enigma"], role:["number2"]},//
    {heroname: "t096_Demon_witch",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t089_Shadow_shaman","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker"],friends:["t038_Anti_mage","t030_Pudge","t046_Priestess_of_the_moon","t100_Oblivion","t091_Skywrath_mage"], role:["number5"]},//"number4"
    {heroname: "t097_Enigma",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t089_Shadow_shaman","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t005_Omniknight"],friends:["t052_Ursa_warrior","t035_Magnataur","t046_Priestess_of_the_moon","t061_Phantom_assassin","t091_Skywrath_mage","t098_Lich","t050_Drow_ranger"], role:["number2"]},//"number3"
    {heroname: "t098_Lich",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t045_Phantom_lancer","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t005_Omniknight","t044_Naga_siren","t023_Chaos_knight"],friends:["t010_Treant_protector","t035_Magnataur","t070_Faceless_void","t097_Enigma","t034_Tidehunter"], role:["number3"]},//"number4"
    {heroname: "t099_Necrolyte",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t005_Omniknight"],friends:["t096_Demon_witch","t100_Oblivion","t015_Sacred_warrior","t063_Soul_keeper"], role:["number1"]},//"number2"//"number3"
    {heroname: "t100_Oblivion",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t005_Omniknight"],friends:["t079_Prophet","t007_Rogue_knight","t096_Demon_witch","t091_Skywrath_mage","t089_Shadow_shaman","t081_Slayer"], role:["number2"]},//"number4"
    {heroname: "t101_Obsidian_destroyer",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t005_Omniknight"],friends:["t010_Treant_protector","t035_Magnataur","t094_Dark_seer"], role:["number2"]},//
    {heroname: "t102_Queen_of_pain",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t005_Omniknight"],friends:["t010_Treant_protector","t035_Magnataur","t007_Rogue_knight","t097_Enigma","t070_Faceless_void"], role:["number3"]},//"number4"//"number2"
    {heroname: "t103_Warlock",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin"],friends:["t037_Sand_king","t097_Enigma","t035_Magnataur","t073_Crystal_maiden","t084_Disruptor"], role:["number4"]},//"number2"
    {heroname: "t104_Shadow_demon",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t005_Omniknight"],friends:["t007_Rogue_knight","t097_Enigma","t010_Treant_protector","t035_Magnataur","t091_Skywrath_mage","t077_Keeper_of_the_light","t073_Crystal_maiden"], role:["number4"]},//"number5"
    {heroname: "t105_Batrider",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker"],friends:["t086_Goblin_techies","t052_Ursa_warrior","t097_Enigma","t046_Priestess_of_the_moon","t056_Bloodseeker","t091_Skywrath_mage"], role:["number3"]},//
    {heroname: "t106_Shadow_priest",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker"],friends:["t015_Sacred_warrior","t019_Legion_commander","t022_Axe"], role:["number4"]},//"number5"
    {heroname: "t107_Invoker",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t056_Bloodseeker"],friends:["t052_Ursa_warriorr","t061_Phantom_assassin","t070_Faceless_void","t091_Skywrath_mage","t089_Shadow_shaman","t100_Oblivion","t084_Disruptor","t097_Enigma"], role:["number1"]},//"number2"
    {heroname: "t108_Necro`lic",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker"],friends:["t073_Crystal_maiden","t053_Vengeful_spirit"], role:["number2"]},//"number3"//"number4"
    {heroname: "t109_Tormented_soul",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker","t030_Pudge"],friends:["t079_Prophet","t097_Enigma","t022_Axe","t007_Rogue_knight","t100_Oblivion","t089_Shadow_shaman"], role:["number2"]},//
    {heroname: "t110_Witch_doctor",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t045_Phantom_lancer","t044_Naga_siren","t007_Rogue_knight"],friends:["t007_Rogue_knight","t096_Demon_witch","t081_Slayer","t097_Enigma","t035_Magnataur","t089_Shadow_shaman"], role:["number5"]},//"number4"
    {heroname: "t111_Ancient_apparition",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker"],friends:["t007_Rogue_knight","t085_Ogre_magi","t096_Demon_witch","t089_Shadow_shaman","t081_Slayer","t078_Lord_of_Olympia","t107_Invoker"], role:["number5"]},//"number4"//"number3"
    {heroname: "t112_Winter_wywern",foe: ["t050_Drow_ranger","t080_Silencer","t095_Death_prophet","t038_Anti_mage","t059_Nerubian_assassin","t024_Doom_bringer","t047_Stealth_assassin","t028_Night_stalker"],friends:["t081_Slayer","t035_Magnataur","t091_Skywrath_mage","t049_Gyrocopter"], role:["number5"]},//"number4"
    ]

let poolDict = [

]

let draggedItem = null
let droppeZone = null

/* определяем обработчики события драга */

dragItems.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDragstart)/* для каждого драгитема добавляем обработчик, 
    который отслеживает event драг старт, после чего вызывает фунцию-обработчик handler */
    dragItem.addEventListener('dragend', handlerDragend)
    dragItem.addEventListener('drag', handlerDrag)/* этот обработчик включается пока мы тащим элементю Он нужен
 для того чтобы в дальнейшем он был якорем по которому мы передаем значения в зону дропа */
})

/* определяем обработчик события для дропа */
dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragenter',handlerDrageneter)
    dropZone.addEventListener('dragleave',handlerDragleave)
    dropZone.addEventListener('drop',handlerDrop)
    dropZone.addEventListener('dragover', handlerDragover)
    dropZone.addEventListener('dragend', handlerDragend)
})

/* определяем функции обработчики драга */


function handlerDragstart(event){
    draggedItem = this
    this.classList.add('hero--active')
}


function handlerDragend(event){
    draggedItem = null
    this.classList.remove('hero--active')
}
function handlerDrag(event) {
}
/* определяем функции обработчики дропа */

function handlerDrageneter(event) {
    event.preventDefault()
    droppeZone = this

}
function handlerDragleave(event) {
    droppeZone = null
}
function handlerDragover(event) {
        if (!event.target.classList.contains('hero') && !event.target.closest('.hero'))
            event.preventDefault();
        }

let count = 7

function handlerDrop(event) {
    count += 1
    this.append(draggedItem)
    const imageName = event.dataTransfer.getData("text/plain").split("/").pop().replace(".png","")
    const key = heroDict.find(findHeroName) // константа для поиска имени героя по imaginename и её функция
    function findHeroName(heroDict) {
        return heroDict.heroname === imageName
    }
    
    const myTeam = event.target.closest("#myTeam");
    const notMyTeam = event.target.closest("#notMyTeam");
    
    if (myTeam) {
      fof = Object.values(key.friends);
    } else if (notMyTeam) {
      fof = Object.values(key.foe);
    }


    fof.forEach((type) => {
        count += 1
        const newBlock = document.createElement('div')
        newBlock.classList.add('poolhero')
        newBlock.setAttribute("draggable", "true")
        newBlock.setAttribute("data-item", count)
        const newImage = document.createElement('img')
        newImage.src = `icons/${type}.png`// здесь нужно указать путь к изображению
/*         poolDict.push(newImage.src) */

        if (!poolDict.includes(newImage.src)) {
            poolDict.push(newImage.src);
            ;
            newBlock.appendChild(newImage)
            poolDiv.appendChild(newBlock)
            newBlock.addEventListener('dragstart', handlerDragstart)
            newBlock.addEventListener('dragend', handlerDragend)
          }
   
    })
    console.log(poolDict)
    const roleIndex = Array.from(dropZones).indexOf(event.target) // определяем индекс зоны, в которую был сброшен элемент
    const role = Object.values(key.role)
    const newImageRole = document.createElement('img')
    newImageRole.src = `icons/${role}.png` // здесь нужно указать путь к изображению
    let roleBlock = document.querySelector(`.role${roleIndex}`)
    roleBlock.appendChild(newImageRole)
    let dragItems = document.querySelectorAll(".hero, .poolhero")


}