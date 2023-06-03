
import { version } from '../package.json';
import {PokeScripterModal} from './SettingMenu';

console.log('Userscript-template: ' + version)
const modal = new PokeScripterModal();
modal.addPokeScripterModal();


