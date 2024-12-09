<script setup lang="ts">
import { jobsState } from "@/store";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const jobId = +route.params.id;
const { jobs } = jobsState;
const job = jobs.find((job) => job.id === jobId);

onMounted(() => {
  if (!job) {
    router.replace({
      name: "not-found",
      params: { pathMatch: route.path.substring(1).split("/") },
    });
  }
});
</script>

<template>
  <!-- Go Back -->
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
      </RouterLink>
    </div>
    <div v-if="!job"></div>
    <div v-else>
      <section class="bg-green-50 h-[calc(100vh-160px)]">
        <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div
                class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
              >
                <div class="text-gray-500 mb-4">{{ job.type }}</div>
                <h1 class="text-3xl font-bold mb-4">{{ job.title }}</h1>
                <div
                  class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <i
                    class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                  ></i>
                  <p class="text-orange-700">{{ job.location }}</p>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="text-green-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p class="mb-4">
                  {{ job.description }}
                </p>

                <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

                <p class="mb-4">${{ job.salary }} / Year</p>
              </div>
            </main>

            <!-- Sidebar -->
            <aside>
              <!-- Company Info -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-6">Company Info</h3>

                <h2 class="text-2xl">NewTek Solutions</h2>

                <p class="my-2">
                  NewTek Solutions is a leading technology company specializing
                  in web development and digital solutions. We pride ourselves
                  on delivering high-quality products and services to our
                  clients while fostering a collaborative and innovative work
                  environment.
                </p>

                <hr class="my-4" />

                <h3 class="text-xl">Contact Email:</h3>

                <p class="my-2 bg-green-100 p-2 font-bold">
                  contact@newteksolutions.com
                </p>

                <h3 class="text-xl">Contact Phone:</h3>

                <p class="my-2 bg-green-100 p-2 font-bold">555-555-5555</p>
              </div>

              <!-- Manage -->
              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                <a
                  href="add-job.html"
                  class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >Edit Job</a
                >
                <button
                  class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
