"use strict";
/*
 * This file is part of IodineGBA
 *
 * Copyright (C) 2012-2013 Grant Galitz
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 * The full license is available at http://www.gnu.org/licenses/gpl.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 */
var games = {
    "pokemonglaze":"Home | Schoology",
    "pokemonlightplat":"Home | Schoology",
    "pokemondarkviolet":"Home | Schoology",
    "advancewars":"Home | Schoology",
    "advancewars2":"Home | Schoology",
    "aladdin":"Home | Schoology",
    "alienhominid":"Home | Schoology",
    "bomberman_max2blue":"Home | Schoology",
    "bomberman_tournament":"Home | Schoology",
    "bubblebobble":"Home | Schoology",
    "croket1":"Home | Schoology",
    "croket2":"Home | Schoology",
    "croket3":"Home | Schoology",
    "croket4":"Home | Schoology",
    "digimon_racing":"Home | Schoology",
    "dbz_supersonic":"Home | Schoology",
    "drilldozer":"Home | Schoology",
    "earthwormjim":"Home | Schoology",
    "earthwormjim2":"Home | Schoology",
    "ff1and2":"Home | Schoology",
    "ff4S":"Home | Schoology",
    "ff6":"Home | Schoology",
    "final_fantasy_tactics":"Home | Schoology",
    "fire_emblem":"Home | Schoology",
    "frogger1":"Home | Schoology",
    "frogger2":"Home | Schoology",
    "frogger3":"Home | Schoology",
    "fzero_gp":"Home | Schoology",
    "fzero_max":"Home | Schoology",
    "gamewatch4":"Home | Schoology",
    "goldensun":"Home | Schoology",
    "gunstar_super_heroes":"Home | Schoology",
    "hamtaro_heartbreak":"Home | Schoology",
    "kirbymirror":"Home | Schoology",
    "kirbynightmare":"Home | Schoology",
    "mariokart":"Home | Schoology",
    "marioparty":"Home | Schoology",
    "mariopinball":"Home | Schoology",
    "megamanbass":"Home | Schoology",
    "megaman_battle1":"Home | Schoology",
    "megaman_battle2":"Home | Schoology",
    "megaman_battle3_blue":"Home | Schoology",
    "megaman_battle4_blue":"Home | Schoology",
    "megaman_battle4_red":"Home | Schoology",
    "megaman_battle5":"Home | Schoology",
    "megaman_battle6":"Home | Schoology",
    "megaman_zero1":"Home | Schoology",
    "megaman_zero2":"Home | Schoology",
    "megaman_zero3":"Home | Schoology",
    "megaman_zero4":"Home | Schoology",
    "metalslug":"Home | Schoology",
    "metroid_fusion":"Home | Schoology",
    "momotarou_dentetsu":"Home | Schoology",
    "monopoly":"Home | Schoology",
    "monster_force":"Home | Schoology",
    "mortal_kombat":"Home | Schoology",
    "pacman_world":"Home | Schoology",
    "pacman_world2":"Home | Schoology",
    "pokemonflorasky":"Home | Schoology",
    "pokemonemerald":"Home | Schoology",
    "pokemongreen":"Home | Schoology",
    "mysteryred":"Home | Schoology",
    "pokemonruby":"Home | Schoology",
    "pokemonsapphire":"Home | Schoology",
    "pokemonred":"Home | Schoology",
    "gba_video_pokemon_1":"Home | Schoology",
    "gba_video_pokemon_2":"Home | Schoology",
    "gba_video_pokemon_3":"Home | Schoology",
    "gba_video_pokemon_4":"Home | Schoology",
    "sonic_advance":"Home | Schoology",
    "sonic_advance2":"Home | Schoology",
    "sonic_advance3":"Home | Schoology",
    "sonicbattle":"Home | Schoology",
    "supermonkeyballjr":"Home | Schoology",
    "superstar":"Home | Schoology",
    "supermarioadvance":"Home | Schoology",
    "supermarioadvance2":"Home | Schoology",
    "supermarioadvance3":"Home | Schoology",
    "supermarioadvance4":"Home | Schoology",
    "simpsons":"Home | Schoology",
    "sonicpinball":"Home | Schoology",
    "super_street_fighter_2_turbo_revival":"Home | Schoology",
    "super_street_fighter_3_alpha":"Home | Schoology",
    "tales_of_phantasia":"Home | Schoology",
    "tak2_staff_of_dreams":"Home | Schoology",
    "tetris_worlds":"Home | Schoology",
    "tmnt":"Home | Schoology",
    "sims_bustin_out":"Home | Schoology",
    "sims2":"Home | Schoology",
    "spyro_adventure":"Home | Schoology",
    "spyro_ice":"Home | Schoology",
    "spyro_flame":"Home | Schoology",
    "turok_evolution":"Home | Schoology",
    "warioland4":"Home | Schoology",
    "wario_ware":"Home | Schoology",
    "zelda_past":"Home | Schoology",
    "zelda_minish":"Home | Schoology",
};
var Iodine = null;
var Blitter = null;
var Mixer = null;
var MixerInput = null;
var timerID = null;
window.onload = function () {
    if (!games[location.hash.substr(1)]) {
        alert("Invalid game request!");
        return;
    }
    //Initialize Iodine:
    Iodine = new GameBoyAdvanceEmulator();
    //Initialize the graphics:
    registerBlitterHandler();
    //Initialize the audio:
    registerAudioHandler();
    //Register the save handler callbacks:
    registerSaveHandlers();
    //Hook the GUI controls.
    registerGUIEvents();
    //Enable Sound:
    Iodine.enableAudio();
    //Download the BIOS:
    downloadBIOS();
}
function downloadBIOS() {
    downloadFile("Binaries/gba_bios.bin", registerBIOS);
}
function registerBIOS() {
    processDownload(this, attachBIOS);
    downloadROM(location.hash.substr(1));
}
function downloadROM(gamename) {
    Iodine.pause();
    showTempString("Downloading \"" + games[gamename] + ".\"");
    downloadFile("Binaries/" + gamename + ".gba", registerROM);
}
function registerROM() {
    clearTempString();
    processDownload(this, attachROM);
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
        Iodine.disableAudio();
    }
    Iodine.play();
}
function registerBlitterHandler() {
    Blitter = new GlueCodeGfx();
    Blitter.attachCanvas(document.getElementById("emulator_target"));
    Blitter.setSmoothScaling(false);
    Iodine.attachGraphicsFrameHandler(function (buffer) {Blitter.copyBuffer(buffer);});
}
function registerAudioHandler() {
    Mixer = new GlueCodeMixer();
    MixerInput = new GlueCodeMixerInput(Mixer);
    Iodine.attachAudioHandler(MixerInput);
}
function registerGUIEvents() {
    addEvent("keydown", document, keyDown);
    addEvent("keyup", document, keyUpPreprocess);
    addEvent("unload", window, ExportSave);
    Iodine.attachSpeedHandler(function (speed) {
        document.title = games[location.hash.substr(1)];
    });
}
function lowerVolume() {
    Iodine.incrementVolume(-0.04);
}
function raiseVolume() {
    Iodine.incrementVolume(0.04);
}
function writeRedTemporaryText(textString) {
    if (timerID) {
        clearTimeout(timerID);
    }
    showTempString(textString);
    timerID = setTimeout(clearTempString, 5000);
}
function showTempString(textString) {
    document.getElementById("tempMessage").style.display = "block";
    document.getElementById("tempMessage").textContent = textString;
}
function clearTempString() {
    document.getElementById("tempMessage").style.display = "none";
}
//Some wrappers and extensions for non-DOM3 browsers:
function addEvent(sEvent, oElement, fListener) {
    try {    
        oElement.addEventListener(sEvent, fListener, false);
    }
    catch (error) {
        oElement.attachEvent("on" + sEvent, fListener);    //Pity for IE.
    }
}
function removeEvent(sEvent, oElement, fListener) {
    try {    
        oElement.removeEventListener(sEvent, fListener, false);
    }
    catch (error) {
        oElement.detachEvent("on" + sEvent, fListener);    //Pity for IE.
    }
}
