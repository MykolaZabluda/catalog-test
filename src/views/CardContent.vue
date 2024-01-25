<template>
  <div class="studies-news container-fluid">
    <div class="row content">
      <div class="col-12">
        <div class="studies-news-header">
          <router-link to="/" class="back-btn mx-3">
            <img class="arrow" :src="arrow" alt="arrow" />
            Back
          </router-link>
          <p class="subtitle mx-3">{{ data.price }}</p>
          <h2 class="title mx-3">{{ data.title }}</h2>
          <div class="container-fluid">
            <div class="row studies-news-header-cards">
              <div
                  class="studies-news-header-cards-left col-xs-12 col-sm-12 col-md-4 d-flex align-items-stretch"
              >
                <div class="card me-3">
                  <img
                      class="company-logo"
                      :src="data.image"
                      alt="company logo"
                  />
                </div>
              </div>
              <div
                  class="studies-news-header-cards-right col-xs-12 col-sm-12 col-md-8 d-flex align-items-stretch"
              >
                <div class="card ms-3">
                  <h3 class="card-title">About</h3>
                  <p class="card-subtitle">
                    {{ data.text1 }}
                  </p>
                  <p class="card-subtitle card-subtitle-2">
                    {{ data.text2 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {CARD_DATA} from "@/shared/card-helpers";
import arrow from "@/assets/arrow.svg";

export default {
  data() {
    return {
      arrow,
      cardsData: CARD_DATA,
      data: {},
    };
  },
  beforeMount() {
    this.data = this.cardsData.filter((item) => {
      return item.id === this.$route.params.id;
    })[0];
  },
};
</script>

<style scoped lang="scss">
.studies-news {
  padding: 8% 0;
  max-width: 1312px;

  .content,
  .more-cases {
    width: 100%;
    margin: auto;
  }

  &-header {
    margin-bottom: 55px;

    .back-btn {
      display: flex;
      flex-direction: row;
      justify-content: left;
      text-decoration: none;
      font-family: Lexend, sans-serif;
      font-weight: 500;
      color: #f2a33a;
      margin-bottom: 35px;
      z-index: 3;
      position: sticky;
      width: fit-content;

      img {
        width: 24px;
        height: 24px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        margin-right: 10px;
      }
    }

    .subtitle {
      font-family: Inter, sans-serif;
      text-transform: uppercase;
      font-size: 16px;
      color: #bfc6ea;
      text-align: left;
    }

    .title {
      font-family: Audiowide, sans-serif;
      font-size: 32px;
      color: #fff;
      text-align: left;
      text-transform: uppercase;
    }

    &-cards {
      &-left {
        .card {
          display: flex;
          justify-content: center;
          background: #184083;
          border: 1px solid #5d607b;
          border-radius: 24px;
          overflow: hidden;
        }
      }

      &-right {
        .card {
          background: #152563;
          border: 1px solid #5d607b;
          border-radius: 24px;
          padding: 48px;
          height: 100%;

          &-title {
            font-family: Audiowide, sans-serif;
            font-size: 24px;
            color: #e8e9ef;
            text-align: left;
            text-transform: uppercase;
            margin-bottom: 25px;
          }

          &-subtitle {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #bfc6ea;
            text-align: left;

            &-2 {
              margin-top: 35px;
            }
          }
        }
      }
    }
  }

  &-body {
    padding: 0;

    &-subtitle {
      font-family: Inter, sans-serif;
      font-size: 16px;
      color: #9fa5c6;
      text-transform: uppercase;
      text-align: left;
    }

    &-title {
      font-family: Audiowide, sans-serif;
      font-size: 32px;
      color: #e8e9ef;
      text-transform: uppercase;
      text-align: left;
    }

    .card-ellipse {
      z-index: 1;
      width: 481px;
      height: 26.096px;
      position: absolute;
      left: -35px;
      bottom: 0;
      border-radius: 481px;
      background: var(
              --lights-blue-gradient,
              radial-gradient(
                      50% 50% at 50% 50%,
                      rgba(13, 123, 208, 0.4) 0%,
                      rgba(14, 126, 207, 0.22) 100%
              )
      );
      filter: blur(22.50133514404297px);
    }

    .card {
      overflow: hidden;
      background: #1b2663;
      border: 1px solid #5c607b;
      border-radius: 24px;
      padding: 48px;
      height: 100%;

      img {
        width: 60px;
        height: 60px;
      }

      &-title {
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 0.2px;
        font-family: Audiowide, sans-serif;
        font-size: 20px;
        color: #fff;
        text-align: left;
        text-transform: uppercase;
        margin-top: 35px;
      }
    }

    .first-line {
      margin-top: 55px;

      &-left {
        .card {
          height: fit-content;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 48px;
          background: #16205d;
          border: 1px solid #3a4170;
          border-radius: 24px;
          overflow: hidden;

          .blur {
            position: absolute;
            height: 100%;
            width: auto;
            left: 0;
          }

          &-img {
            width: 60px;
            height: 60px;
          }

          &-title {
            font-family: Audiowide, sans-serif;
            font-size: 24px;
            color: #e8e9ef;
            text-transform: uppercase;
            text-align: left;
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      }

      &-right {
        .card {
          padding: 48px;
          background: #16215e;
          border: 1px solid #595c79;
          border-radius: 24px;

          &-text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #bfc6ea;
            text-align: left;

            span {
              color: #f2a33a;
            }
          }
        }
      }
    }

    .second-line {
      margin-top: 60px;

      &-left {
        .card {
          height: fit-content;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 48px;
          background: #16205d;
          border: 1px solid #3a4170;
          border-radius: 24px;

          &-img {
            width: 60px;
            height: 60px;
          }

          &-title {
            font-family: Audiowide, sans-serif;
            font-size: 24px;
            color: #e8e9ef;
            text-transform: uppercase;
            text-align: left;
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      }

      &-right {
        .card {
          padding: 48px;
          background: #16215e;
          border: 1px solid #595c79;
          border-radius: 24px;

          &-text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #bfc6ea;
            text-align: left;

            span {
              color: #f2a33a;
            }
          }
        }
      }
    }

    .third-line {
      margin-top: 60px;

      &-left {
        .card {
          height: fit-content;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 48px;
          background: #16205d;
          border: 1px solid #3a4170;
          border-radius: 24px;

          &-img {
            width: 60px;
            height: 60px;
          }

          &-title {
            font-family: Audiowide, sans-serif;
            font-size: 24px;
            color: #e8e9ef;
            text-transform: uppercase;
            text-align: left;
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      }

      &-right {
        .card {
          padding: 48px;
          background: #16215e;
          border: 1px solid #595c79;
          border-radius: 24px;

          &-text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #bfc6ea;
            text-align: left;

            span {
              color: #f2a33a;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .studies-news {
    //padding: 25% 3% 8% 3%;
    padding: 125px 3% 8% 3%;

    &-header {
      &-cards-left {
        margin-bottom: 15px;

        .card {
          margin-right: 0 !important;
        }
      }

      &-cards-right {
        .card {
          margin-left: 0 !important;
        }
      }
    }

    &-body {
      .first-line {
        border: 1px solid #595c79;
        border-radius: 24px;
        overflow: hidden;

        &-left {
          .card {
            margin-right: 0;
            //border-radius: 0;
            border: none;
            border-bottom: 1px solid #595c79;

            .blur {
              display: none;
            }
          }
        }

        &-right {
          height: 400px;
          overflow-x: auto;

          .card {
            border: none;
            padding: 0;
            overflow: scroll;

            &-text {
              padding: 48px;

              &:nth-child(1) {
                padding: 48px 48px 0 48px;
              }
            }
          }
        }
      }

      .second-line {
        border: 1px solid #595c79;
        border-radius: 24px;
        overflow: hidden;
        display: none;

        &-left {
          .card {
            margin-right: 0;
            border-radius: 0;
            border: none;
            border-bottom: 1px solid #595c79;
          }
        }

        &-right {
          .card {
            border: none;
          }
        }
      }

      .third-line {
        border: 1px solid #595c79;
        border-radius: 24px;
        overflow: hidden;
        display: none;

        &-left {
          .card {
            margin-right: 0;
            border-radius: 0;
            border: none;
            border-bottom: 1px solid #595c79;
          }
        }

        &-right {
          .card {
            border: none;
          }
        }
      }
    }
  }
}
</style>
