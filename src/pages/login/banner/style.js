import styled from 'styled-components';

export const BannerDiv = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;

  .logo {
    position: absolute;
    left: 5%;
    top: -50px;
    display: flex;
    align-items: flex-start;
    animation: logo-animation 1s ease 500ms 1 forwards;

    @keyframes logo-animation {
      0% {
        left: 5%;
        top: -50px;
        opacity: 0;
      }

      100% {
        left: 5%;
        top: 5%;
        opacity: 1;
      }
    }

    img {
      width: 40px;
      opacity: .7;
    }

    i {
      padding-left: 20px;
      font-style: normal;
      font-size: 25px;
      font-weight: bold;
      color: #fff;
      opacity: .9;
    }
  }

  .banner {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;

    .banner-image-container {
      position: relative;

      img {
        width: 750px;
        height: 480px;
        z-index: 20;
      }

      .star {
        position: absolute;
        left: 580px;
        top: 280px;
        animation: star-animation 3s infinite linear;

        img {
          width: 12px;
          height: auto;
          z-index: 30;
        }
      }

      .star2 {
        position: absolute;
        left: 590px;
        top: 290px;
        animation: star2-animation 3s infinite linear;

        img {
          width: 12px;
          height: auto;
          z-index: 30;
        }
      }

      .text {
        position: absolute;
        left: 95px;
        top: 186px;
        animation: text-animation 15s ease 1ms 1 forwards;

        img {
          width: 22px;
          height: auto;
          z-index: 30;
        }
      }

      .bar_z {
        position: absolute;
        left: 354px;
        top: 198px;
        perspective: 4px;

        img {
          display: block;
          width: 152px;
          height: auto;
          z-index: 100;
          animation: bar_z-animation 5s infinite linear;
          //transform: rotateY(174deg);
          transform-origin: 0 100%;
        }
      }

      .info {
        position: absolute;
        left: 244px;
        top: 190px;
        animation: info-animation 10s ease 1ms 1 forwards;

        img {
          width: 158px;
          height: auto;
          z-index: 50;
        }
      }

      .circle {
        position: absolute;
        left: 255px;
        top: 238px;
        animation: circle-animation 10s infinite linear;

        img {
          width: 60px;
          height: auto;
          z-index: 50;
        }
      }

      .circle2 {
        position: absolute;
        left: 255px;
        top: 238px;
        animation: circle2-animation 10s infinite linear;

        img {
          width: 60px;
          height: auto;
          z-index: 40;
        }
      }

      .circle_b {
        position: absolute;
        left: 255px;
        top: 238px;
        animation: circle_b-animation 10s infinite linear;

        img {
          width: 60px;
          height: auto;
          z-index: 30;
        }
      }

      .folder {
        position: absolute;
        left: 60px;
        top: 193px;
        animation: folder-animation 10s infinite linear;

        img {
          width: 38px;
          height: auto;
          z-index: 60;
        }
      }

      .folder2 {
        position: absolute;
        left: 60px;
        top: 193px;
        animation: folder2-animation 10s infinite linear;

        img {
          width: 38px;
          height: auto;
          z-index: 50;
        }
      }

      .folder_grey {
        position: absolute;
        left: 60px;
        top: 193px;
        animation: folder_grey-animation 10s infinite linear;

        img {
          width: 38px;
          height: auto;
          z-index: 30;
        }
      }

    }

    @keyframes bar_z-animation {
      0% {
        transform: scaleY(.01) rotateY(174deg);
      }

      50% {
        transform: scaleY(1.2) rotateY(174deg);
      }

      100% {
        transform: scaleY(.01) rotateY(174deg);
      }
    }

    @keyframes text-animation {
      0% {
        transform: translateY(0px);
        opacity: 0;
      }

      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @keyframes info-animation {
      0% {
        transform: translateY(0px);
        opacity: 0;
      }

      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @keyframes circle-animation {
      0% {
        transform: translateY(0px);
      }

      60% {
        transform: translateX(18px) translateY(15px);
      }

      100% {
        transform: translateX(0px) translateY(0px);
      }

    }

    @keyframes circle2-animation {
      0% {
        transform: translateY(0px);
        opacity: .5;
      }

      60% {
        transform: translateX(10px) translateY(7px);
        opacity: .5;
      }

      100% {
        transform: translateX(0px) translateY(0px);
        opacity: .5;
      }
    }

    @keyframes circle_b-animation {
      0% {
        transform: translateY(0px);
        opacity: .3;
      }

      60% {
        transform: translateX(0px) translateY(0px);
        opacity: .3;
      }

      100% {
        transform: translateX(0px) translateY(0px);
        opacity: .3;
      }
    }

    @keyframes folder-animation {
      0% {
        transform: translateY(0px);
      }

      60% {
        transform: translateX(18px) translateY(15px);
      }

      100% {
        transform: translateX(0px) translateY(0px);
      }

    }

    @keyframes folder2-animation {
      0% {
        transform: translateY(0px);
        opacity: .5;
      }

      60% {
        transform: translateX(10px) translateY(7px);
        opacity: .5;
      }

      100% {
        transform: translateX(0px) translateY(0px);
        opacity: .5;
      }
    }

    @keyframes folder_grey-animation {
      0% {
        transform: translateY(0px);
      }

      60% {
        transform: translateX(0px) translateY(0px);
      }

      100% {
        transform: translateX(0px) translateY(0px);
      }
    }

    @keyframes star-animation {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(20px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    @keyframes star2-animation {
      0% {
        transform: translateY(20px);
      }

      50% {
        transform: translateY(0px);
      }

      100% {
        transform: translateY(20px);
      }
    }

  }
`