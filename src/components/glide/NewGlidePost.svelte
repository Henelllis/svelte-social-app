<script>
  console.log("'DANCE MAGIC");

  import TiImageOutline from "svelte-icons/ti/TiImageOutline.svelte";
  import UserIcon from "./UserIcon.svelte";

  export let glideContent;
  console.log("CONTENT" + glideContent);
  export let createGlide;
</script>

<div class="flex-it py-1 px-4 flex-row">
  <UserIcon />
  <!-- MESSENGER START -->
  <div class="flex-it flex-grow">
    <div class="flex-it">
      <textarea
        bind:value={glideContent}
        name="content"
        rows="1"
        id="glide"
        class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
        placeholder={"What's new?"}
      />
    </div>
    <div class="flex-it mb-1 flex-row xs:justify-between items-center">
      <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
        <div class="upload-btn-wrapper">
          <div class="icon">
            <TiImageOutline />
          </div>
          <input type="file" name="myfile" />
        </div>
      </div>
      <div class="flex-it w-32 mt-3 cursor-pointer">
        <button
          on:click={createGlide}
          type="button"
          class="
                        disabled:cursor-not-allowed disabled:bg-gray-400
                        bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
        >
          <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
            <span>Glide It</span>
          </div>
        </button>
      </div>
    </div>
  </div>
  <!-- MESSENGER END -->
</div>
