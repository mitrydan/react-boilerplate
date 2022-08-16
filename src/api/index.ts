import { Axios } from "./axios";
import { DummyApi } from "./dummyApi";

const API = {
  DummyApi: new DummyApi("<url>", Axios),
};

export default API;
