import {version} from '../package.json';
import {render} from 'preact';
import {Menu, MenuProps} from './ui/menu';
import {autobattle, autobreed, autodungeon, autofarm, autogym, automove} from './scripts';
import {OptionUI} from './ui/optionRow';

console.log('Userscript-template: ' + version);

const menuProps: MenuProps = {
    options: []
}
menuProps.options.push(new OptionUI("Auto Battle", autobattle))
menuProps.options.push(new OptionUI("Auto Breed", autobreed))
menuProps.options.push(new OptionUI("Auto Farm", autofarm))
menuProps.options.push(new OptionUI("Auto Gym", autogym))
menuProps.options.push(new OptionUI("Auto Move Route", automove))
menuProps.options.push(new OptionUI("Auto Dungeon", autodungeon))

const menu = Menu(menuProps);
const uiCol = document.getElementById('middle-bottom-sort-column');
const root = document.createElement('div');
uiCol.appendChild(root);
render(menu, root);


