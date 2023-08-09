<script>
  import TrendsSidebar from "../components/sidebars/TrendsSidebar.svelte";
  import NavSidebar from "../components/sidebars/NavSidebar.svelte";
  import GlidePost from "../components/glide/GlidePost.svelte";
  import NewGlidePost from "../components/glide/NewGlidePost.svelte";
</script>

<div class="w-full h-full bg-gray-900 text-gray-100">
  <div class="flex h-full min-h-252">
    <!-- SIDEBAR START -->
    <NavSidebar />
    <!-- SIDEBARS END -->
    <main class="flex-it flex-grow flex-shrink items-start">
      <div class="flex md:w-248 w-full h-full">
        <div class="flex-it flex-grow flex-shrink">
          <div class="flex-it flex-row justify-between min-h-full">
            <div class="flex-it md:max-w-152 w-full border-x-1 border-solid border-gray-700">
              <div class="sticky z-10 flex-it top-0">
                <div
                  class="flex-it h-14 p-4 xl:text-xl text-sm font-bold z-10 backdrop-blur-md bg-opacity-70"
                >
                  Home
                </div>
              </div>

              <!-- HOME PAGE START -->
              <NewGlidePost />
              <div class="h-px bg-gray-700 my-1" />
              <!-- GLIDE POST START -->
              <GlidePost />
              <!-- GLIDE POST END -->
              <!-- HOME PAGE END -->
            </div>
            <div class="flex-it md:w-92 w-0 mt-4">
              <!-- TRENDS SIDEBAR START -->
              <TrendsSidebar />
              <!-- TRENDS SIDEBAR END -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
