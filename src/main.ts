import {name, version} from '../package.json';
import {autobattle, autobreed, autodungeon, autofarm, autogym, automove} from './scripts';
import {OptionUI, SettingContainer, SettingContainerProps} from './ui/component';
import {render} from 'preact';

console.log(`${name}: v${version}`);

const menuProps: SettingContainerProps = {
    options: []
}
menuProps.options.push(new OptionUI("Auto Battle", autobattle))
menuProps.options.push(new OptionUI("Auto Breed", autobreed))
menuProps.options.push(new OptionUI("Auto Farm", autofarm))
menuProps.options.push(new OptionUI("Auto Gym", autogym))
menuProps.options.push(new OptionUI("Auto Move Route", automove))
menuProps.options.push(new OptionUI("Auto Dungeon", autodungeon))

const settingContainer = SettingContainer(menuProps);
const uiCol = document.getElementById('middle-bottom-sort-column');
const root = document.createElement('div');
uiCol.appendChild(root);
render(settingContainer, uiCol, root);



