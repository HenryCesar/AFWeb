import { Classroom } from "@/interfaces/classrooms";
import { INews } from "@/interfaces/news";
import { Page } from "@/interfaces/pages";
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: [
      { name: "Home", path: "/home", id: "1" },
      { name: "Profile", path: "/profile", id: "2" },
      { name: "Classrooms", path: "/classrooms", id: "3" },
      { name: "Newspaper", path: "/newspaper", id: "4" },
      { name: "About", path: "/about", id: "5" },
    ] as Page[],
    classrooms: [
      {
        name: "Portuguese",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        professor: "Caique Duarte",
        date: new Date(),
      },
      {
        name: "Software",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        professor: "Zé Di Camargo",
        date: new Date(),
      },
      {
        name: "Math",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        professor: "Michell Jailson",
        date: new Date(),
      },
      {
        name: "Calculus",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        professor: "Jonas Andrades",
        date: new Date(),
      },
      {
        name: "IA",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        professor: "Zuckerberg",
        date: new Date(),
      },
      {
        name: "Machine Learning",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        professor: "Caique Duarte",
        date: new Date(),
      },
      {
        name: "Web Security",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        professor: "Victor Rubenskov",
        date: new Date(),
      },
      {
        name: "EAD - Social Media",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        professor: "Sheila Maia",
        date: new Date(),
      },
    ] as Classroom[],
    newsList: [] as INews[],
    loading: true,
  },
  mutations: {
    setNews(state, data: INews[]): void {
      state.newsList = data;
    },
    setLoading(state, status: boolean): void {
      state.loading = status;
    },
  },
  actions: {
    async loadNews({ commit }) {
      commit("setLoading", true);

      const response = await axios.get<{ data: INews[] }>(
        "https://inshortsapi.vercel.app/news?category=all"
      );

      commit("setNews", response.data.data);
      commit("setLoading", false);
    },
  },
  getters: {
    newsList(state): INews[] {
      return state.newsList;
    },
  },
});
