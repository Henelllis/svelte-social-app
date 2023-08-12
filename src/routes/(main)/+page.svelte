<script>
  import GlidePost from "@components/glide/GlidePost.svelte";
  import NewGlidePost from "@components/glide/NewGlidePost.svelte";
  let glideContent = "cat";
  let glides = [];

  function createGlide() {
    const date = new Date();
    console.log(glideContent);
    const glide = {
      id: date.toISOString(),
      content: glideContent,
      user: {
        nickName: "Filip99",
        avatar: "https://thrangra.sirv.com/Avatar1.png"
      },
      likesCount: 0,
      subGlideCount: 0,
      date
    };
    glides = [glide, ...glides];
    glideContent = "";
  }

  const setGlideContent = (newValue) => {
    glideContent = newValue;
  };
</script>

<NewGlidePost {createGlide} bind:glideContent />

<div class="h-px bg-gray-700 my-1" />
<!-- GLIDE POST START -->
{#each glides as glide (glide.id)}
  <GlidePost {glide} />
{/each}

<!-- <GlidePost /> -->
<!-- GLIDE POST END -->
<!-- HOME PAGE END -->
