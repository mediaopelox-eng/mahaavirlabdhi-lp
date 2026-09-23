window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ── Lenis + ScrollTrigger sync ──────────────────────────────────────────
  if (typeof lenis !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }


  let cloud1 = document.querySelector(".cloud-img-1");

  if (cloud1) {
    gsap.fromTo(
      cloud1,
      {
        opacity: 0,
        x: -200, // Start the image 400 pixels down
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  let cloud2 = document.querySelector(".cloud-img-2");

  if (cloud2) {
    gsap.fromTo(
      cloud2,
      {
        opacity: 0,
        x: 100, // Start the image 400 pixels down
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  let homeCloud = document.querySelector(".home-cloud");

  if (homeCloud) {
    gsap.fromTo(
      homeCloud,
      {
        opacity: 0,
        x: -200, // Start the image 400 pixels down
      },
      {
        scrollTrigger: {
          trigger: ".section-home",
          start: "top 55%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  let growthCloud1 = document.querySelector(".growth-cloud-1");
  let growthCloud2 = document.querySelector(".growth-cloud-2");
  let growthCloud3 = document.querySelector(".growth-cloud-3");
  let growthCloud4 = document.querySelector(".growth-cloud-4");
  let growthCloud5 = document.querySelector(".growth-cloud-5");

  if (growthCloud1) {
    gsap.fromTo(
      growthCloud1,
      {
        opacity: 0,
        x: -200, // Start the image 400 pixels down
      },
      {
        scrollTrigger: {
          trigger: ".section-growth",
          start: "top 55%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  if (growthCloud2) {
    gsap.fromTo(
      growthCloud2,
      {
        opacity: 0,
        y: 120, // Start the image 400 pixels down
        scale: 0.7,
      },
      {
        scrollTrigger: {
          trigger: ".section-growth",
          start: "top 50%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  if (growthCloud3) {
    gsap.fromTo(
      growthCloud3,
      {
        opacity: 0,
        x: 200, // Start the image 400 pixels down
      },
      {
        scrollTrigger: {
          trigger: ".section-growth",
          start: "top 55%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  if (growthCloud4) {
    gsap.fromTo(
      growthCloud4,
      {
        opacity: 0,
        y: 150, // Start the image 400 pixels down
      },
      {
        scrollTrigger: {
          trigger: ".growth-location",
          start: "top 80%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        y: 0,
        duration: 2.2,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  if (growthCloud5) {
    gsap.fromTo(
      growthCloud5,
      {
        opacity: 0,
        y: 150, // Start the image 400 pixels down
      },
      {
        scrollTrigger: {
          trigger: ".growth-location",
          start: "top 90%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  let aboutCloud = document.querySelector(".about-cloud");

  if (aboutCloud) {
    gsap.fromTo(
      aboutCloud,
      {
        opacity: 0,
        x: -250, // Start the image 400 pixels down
      },
      {
        scrollTrigger: {
          trigger: ".section-about",
          start: "top 70%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        x: 0,
        duration: 2.5,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  let otherCloud = document.querySelector(".other-project-cloud-2");
  if (otherCloud) {
    gsap.fromTo(
      otherCloud,
      {
        opacity: 0,
        x: 200, // Start the image 400 pixels down
      },
      {
        scrollTrigger: {
          trigger: ".other-project-cloud-2",
          start: "top 80%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }

  let otherCloud2 = document.querySelector(".other-project-cloud-3");
  if (otherCloud2) {
    gsap.fromTo(
      otherCloud2,
      {
        opacity: 0,
        x: -100, // Start the image 400 pixels down
      },
      {
        scrollTrigger: {
          trigger: ".other-project-cloud-3",
          start: "top 80%", // When the top of the image is 80% from the top of the viewport
          // end: "top 100%", // When the top of the image is 50% from the top of the viewport
          toggleActions: "play none play reverse", // Play on enter, reverse on leave
          // markers: true, // Display markers for debugging (remove this in production)
        },
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out", // Easing function for smoothness
      }
    );
  }
});

// cursor animation js

// gsap.set(".cursorFollower, .cursorFollowerDot", {
//   xPercent: -50,
//   yPercent: -50,
// });

// document.addEventListener("mousemove", (e) => {
//   // Small dot follows cursor instantly
//   gsap.to(".cursorFollowerDot", {
//     x: e.clientX,
//     y: e.clientY,
//     duration: 0.7,
//     ease: "power2.out",
//   });

//   // Larger circle follows with slight delay
//   gsap.to(".cursorFollower", {
//     x: e.clientX,
//     y: e.clientY,
//     duration: 0.5,
//     ease: "power2.out",
//   });
// });
