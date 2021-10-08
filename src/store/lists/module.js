import {v4 as uuid} from 'uuid'

const lists = {
    state: [
            {
                id: 'template-list',
                name: 'Template List',
                listItems: [
                    {
                        id: 'templateItem-1',
                        resolved: false,
                        content: 'Lorem ipsum ipsum lorem this is template item for test purposes 1'
                    },
                    {
                        id: 'templateItem-2',
                        resolved: false,
                        content: 'Lorem ipsum ipsum lorem this is template item for test purposes 2'
                    },
                    {
                        id: 'templateItem-3',
                        resolved: true,
                        content: 'Lorem ipsum ipsum lorem this is template item for test purposes 3'
                    },
                    {
                        id: 'templateItem-4',
                        resolved: true,
                        content: 'Lorem ipsum ipsum lorem this is template item for test purposes 4'
                    },
                    {
                        id: 'templateItem-5',
                        resolved: false,
                        content: 'Lorem ipsum ipsum lorem this is template item for test purposes 5'
                    }
                ]
            }
        ],
    mutations: {
        resolveItem(state, {listId, itemId}) {
            const listIndex = state.findIndex(el => el.id === listId);
            const itemIndex = state[listIndex].listItems.findIndex(el => el.id === itemId);
            state[listIndex].listItems[itemIndex].resolved = !state[listIndex].listItems[itemIndex].resolved
        },
        deleteItem(state, {listId, itemId}) {
            const listIndex = state.findIndex(el => el.id === listId);
            const itemIndex = state[listIndex].listItems.findIndex(el => el.id === itemId);
            state[listIndex].listItems.splice(itemIndex,1)
        },
        changeContent(state, {listId, itemId, content}) {
            const listIndex = state.findIndex(el => el.id === listId);
            const itemIndex = state[listIndex].listItems.findIndex(el => el.id === itemId);
            state[listIndex].listItems[itemIndex].content = content
        },
        deleteAll(state, {listId}) {
            const listIndex = state.findIndex(el => el.id === listId);
            state[listIndex].listItems = [];
        },
        resolveAll(state, {listId}) {
            const listIndex = state.findIndex(el => el.id === listId);
            state[listIndex].listItems.forEach(el => el.resolved = true)
        },
        addItem(state, {listId}) {
            const listIndex = state.findIndex(el => el.id === listId);
            state[listIndex].listItems.unshift({
                id: uuid(),
                content: '',
                resolved: false
            })
        },
        addList(state, listName) {
            state.push({
                id: uuid(),
                name: listName,
                listItems: []
            })
            console.log(state)
        }
    },
    actions: {
        resolveItem({ commit }, payload) {
            commit('resolveItem', payload);
        },
        changeContent({ commit }, payload) {
            commit('changeContent', payload);
        },
        deleteAll({ commit }, payload) {
            commit('deleteAll', payload);
        },
        resolveAll({ commit }, payload) {
            commit('resolveAll', payload);
        },
        addItem({ commit }, payload) {
            commit('addItem', payload);
        },
        deleteItem({ commit }, payload) {
            commit('deleteItem', payload);
        },
    },
    getters: {
        getListNames(state) {
            return state.map(list => list.name)
        }
    }
}

export {
    lists
};