import { delay } from "../common/util";
import { sampleData } from "./sampleData";

const fetchSampleData = () => delay(1000).then(() => Promise.resolve(sampleData))

export default fetchSampleData
