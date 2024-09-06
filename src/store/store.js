import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "hanyong5",
        password: "123",
        username: "홍길동",
        addr: "서울",
        location: {
          latitude: 0,
          longitude: 0,
        },
        image: "https://picsum.photos/100",
      },
      {
        userid: "ttomi",
        password: "123",
        username: "김유신",
        addr: "서울",
        location: {
          latitude: 0,
          longitude: 0,
        },
        image: "https://picsum.photos/100",
      },
      {
        userid: "test",
        password: "123",
        username: "감강찬",
        addr: "서울",
        location: {
          latitude: 0,
          longitude: 0,
        },
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
  },
});
