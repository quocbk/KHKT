let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let parent = document.querySelector(".parent");

btn.addEventListener("click", () => {
parent.classList.toggle("active");
input.focus();
});

/*Thêm video*/
<script>
document.querySelectorAll('.image-wrapper').forEach(wrapper = {
    wrapper.addEventListener('click', () => {
        const videoContainer = wrapper.querySelector('.youtube-video');
        const iframe = videoContainer.querySelector('iframe');

        if (!iframe.src) {
            iframe.src = 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1'; // Replace VIDEO_ID with actual ID
        }

        videoContainer.style.display = 'block'; // Show video
        wrapper.querySelector('img').style.display = 'none'; // Hide the image
    });
});
</script>