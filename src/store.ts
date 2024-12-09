import { reactive } from "vue";
import jobsData from "@/jobs.json";

export const jobsState = reactive({
  jobs: jobsData,
});
