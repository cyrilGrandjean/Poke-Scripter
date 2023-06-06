
import { version } from '../package.json';
import {render} from 'preact';
import {Menu, MenuProps} from './ui/menu';
import {OptionRowProps} from './ui/optionRow';

console.log('Userscript-template: ' + version);
const test = [{name: 'test'}, {name: 'test2'}, {name: 'test3'}, {name: 'test4'}, {name: 'test5'}];
const menu = Menu({options: test});
const uiCol = document.getElementById('middle-bottom-sort-column');
const root = document.createElement('div');
uiCol.appendChild(root);
render(menu, root);


