import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const store = {
    rerenderEntireTree() {
        console.log("state is changed...")
    },
    _state: {
        profilePage: {
            postData: [
                {name: "Alexey Filippov", message: "Hello World!", likesCount: 25},
                {name: "Alexey Filippov", message: "Bla bla bla", likesCount: 20}
            ],
            newPost: "",
        },
        messagesPage: {
            dialogData: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Sergey"},
                {id: 3, name: "Artem"}
            ],
            messageData: [
                {id: 1, message: "Hi man"},
                {id: 2, message: "How you doing?"},
            ],
            newMessage: "",
        },
        sidebar: {
            friendsList: [
                {
                    id: 1,
                    name: "Sergey Mironov",
                    img: "https://lh3.googleusercontent.com/-j9tfOldlTfA/Vo4tzsMM_OI/AAAAAAAAAAA/f_7nWUAXRVAcqS0-SQsA1FvF0NppfzizQCOQCEAE/s50-p-k-rw-no/photo.jpg"
                },
                {
                    id: 2,
                    name: "Artem Stepanov",
                    img: "https://lh3.googleusercontent.com/-JLEOBHteRZI/V6LZCqp2hJI/AAAAAAAAAAA/e-ENkAHMLhoQ0ybs0J4s-Q3YbzoM2Qb7wCOQCEAE/s80-p-k-rw-no/photo.jpg"
                },
            ],
        },
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this.rerenderEntireTree();
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
};


export default store;