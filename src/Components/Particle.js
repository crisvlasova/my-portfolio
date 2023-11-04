import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle () {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
      const particlesLoaded = (container) => {
        return container
      };
      if(window.screen.width > 1000) {
          return (
              <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                  "fullScreen": {
                      "enable": true,
                      "zIndex": 1
                  },
                  "particles": {
                      "number": {
                          "value": 30,
                          "density": {
                              "enable": false,
                              "value_area": 200
                          }
                      },
                      "color": {
                          "value": "ffe9f2"
                      },
                      "opacity": {
                          "value": 0.8,
                          "random": false,
                          "anim": {
                              "enable": false,
                              "speed": 1,
                              "opacity_min": 0.1,
                              "sync": false
                          }
                      },
                      "size": {
                          "value": 4,
                          "random": true,
                          "anim": {
                              "enable": true,
                              "speed": 8,
                              "size_min": 0.1,
                              "sync": true
                          }
                      },
                      "rotate": {
                          "value": 0,
                          "random": true,
                          "direction": "clockwise",
                          "animation": {
                              "enable": true,
                              "speed": 5,
                              "sync": false
                          }
                      },
                      "line_linked": {
                          "enable": true,
                          "distance": 350,
                          "color": "ffe9f2",
                          "opacity": 0.4,
                          "width": 2
                      },
                      "move": {
                          "enable": true,
                          "speed": 2,
                          "direction": "none",
                          "random": false,
                          "straight": false,
                          "out_mode": "out",
                          "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                          }
                      }
                  },
                  "interactivity": {
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": ["push"]
                          },
                          "onclick": {
                              "enable": false,
                              "mode": "absorver"
                          },
                          "resize": true
                      },
                      "modes": {
                          "grab": {
                              "distance": 400,
                              "line_linked": {
                                  "opacity": 1
                              }
                          },
                          "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                          },
                          "repulse": {
                              "distance": 200
                          },
                          "push": {
                              "particles_nb": 4
                          },
                          "remove": {
                              "particles_nb": 2
                          }
                      }
                  },
                  "retina_detect": true,
              }}
              />
          )
      } else {
        return (
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": 1
                },
                "particles": {
                    "number": {
                        "value": 15,
                        "density": {
                            "enable": false,
                            "value_area": 100
                        }
                    },
                    "color": {
                        "value": "ffe9f2"
                    },
                    "opacity": {
                        "value": 0.8,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 4,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 8,
                            "size_min": 0.1,
                            "sync": true
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 350,
                        "color": "ffe9f2",
                        "opacity": 0.4,
                        "width": 2
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": ["push"]
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "absorver"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
            }}
            />
        )
      }
}