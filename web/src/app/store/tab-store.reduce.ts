import { createReducer, on } from '@ngrx/store';
import { add } from './tab-store.action';
import { TabMenuModel } from '../model/TabMenuModel';

export const tabMenu: TabMenuModel = {
  current: 'item/overview',
  tabs: ['item/overview']
};

export const tabStoreReduce = createReducer(
  tabMenu,
  on(add, state => addTab(state))
);

function addTab(state: TabMenuModel) {
  console.log('triggered');
  tabMenu.tabs.push(...state.tabs);
  return tabMenu;
}
