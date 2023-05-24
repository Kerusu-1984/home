import { useState } from "react";

type Choices = {
  img_src: string;
  is_true: boolean;
  answer: string;
};

const choices: Choices[] = [
  {
    img_src: "/img/pokecaptcha/1.png",
    is_true: true,
    answer: "はがね/フェアリー",
  },
  {
    img_src: "/img/pokecaptcha/2.png",
    is_true: true,
    answer: "はがね/エスパー",
  },
  { img_src: "/img/pokecaptcha/3.png", is_true: false, answer: "みず/こおり" },
  { img_src: "/img/pokecaptcha/4.png", is_true: true, answer: "みず/はがね" },
  { img_src: "/img/pokecaptcha/5.png", is_true: false, answer: "いわ/でんき" },
  {
    img_src: "/img/pokecaptcha/6.png",
    is_true: true,
    answer: "はがね/ドラゴン",
  },
  {
    img_src: "/img/pokecaptcha/7.png",
    is_true: true,
    answer: "はがね/エスパー",
  },
  { img_src: "/img/pokecaptcha/8.png", is_true: false, answer: "ゴースト" },
  {
    img_src: "/img/pokecaptcha/9.png",
    is_true: false,
    answer: "でんき/じめん",
  },
];

const question = "はがねタイプ";

const Pokecaptcha = () => {
  const CaptchaBody = (prop: { choices: Choices[] }) => {
    const [choices, setChoices] = useState<
      { img_src: string; is_true: boolean; checked: boolean; answer: string }[]
    >(
      prop.choices.map((choice) => {
        return { ...choice, checked: false };
      })
    );
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const handleImageClick = (index: number) => {
      if (showAnswer) return;
      const new_choices = choices.map((choice, i) => {
        const new_choice = { ...choice };
        if (i === index) {
          new_choice.checked = !new_choice.checked;
        }
        return new_choice;
      });
      setChoices(new_choices);
    };

    const handleButtonClick = () => {
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked === choices[i].is_true) {
          setCount((count) => count + 1);
        }
      }
      setShowAnswer(true);
    };

    return (
      <>
        <div className="modal-body w-full relative before:block before:pt-[100%] ">
          <div className="my-1 flex flex-wrap  w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {choices.map((item, index) => {
              return (
                <>
                  {item.checked ? (
                    <div
                      style={{
                        width: "32.3%",
                        margin: "0.5%",
                        height: "32.3%",
                      }}
                      onClick={() => {
                        handleImageClick(index);
                      }}
                      className="relative"
                      key={index}
                    >
                      {showAnswer ? (
                        <>
                          <img
                            src={item.img_src}
                            alt="captcha-image"
                            className="w-4/5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30"
                          />
                          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                            {item.answer}
                          </span>
                        </>
                      ) : (
                        <img
                          src={item.img_src}
                          alt="captcha-image"
                          className="w-4/5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        />
                      )}

                      <span className="w-6 h-6 bg-blue-500 rounded-full absolute top-1 left-1"></span>
                      <span className="material-symbols-outlined absolute top-1 left-1 text-white">
                        check
                      </span>
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "32.3%",
                        margin: "0.5%",
                        height: "32.3%",
                      }}
                      onClick={() => {
                        handleImageClick(index);
                      }}
                      className="relative"
                      key={index}
                    >
                      {showAnswer ? (
                        <>
                          <img
                            src={item.img_src}
                            alt="captcha-image"
                            className="opacity-30"
                          />
                          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                            {item.answer}
                          </span>
                        </>
                      ) : (
                        <img src={item.img_src} alt="captcha-image" />
                      )}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex justify-end h-12">
          {showAnswer ? (
            <>
              <button className="hidden" onClick={handleButtonClick}>
                確認
              </button>
              <p className="text-center">正答数:{count}</p>
            </>
          ) : (
            <button
              className="px-6 py-2.5 bg-blue-500 text-white border-none rounded-sm"
              onClick={handleButtonClick}
            >
              確認
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <label htmlFor="my-modal-4">
        <div
          style={{ width: "300px", height: "75px", backgroundColor: "#f5f5f5" }}
          className="border shadow-sm px-3 pt-3"
        >
          <div className="flex items-center justify-between">
            {/* <input
              type="checkbox"
              style={{ transform: "scale(2.5)" }}
              className="w-10"
              disabled
            /> */}
            <div className="w-7 h-7 bg-white border-2 border-gray-300 rounded-sm"></div>
            <p className="my-0 mx-2 lh-sm" style={{ fontSize: "14px" }}>
              私はロボットではあり
              <br />
              ません
            </p>
            <div className="text-center ">
              <span className="material-symbols-outlined">cycle</span>
              <p style={{ fontSize: "10px" }} className="m-0 text-muted">
                pokeCAPTCHA
              </p>
            </div>
          </div>

          <div style={{ fontSize: "10px" }} className="text-end text-muted">
            プライバシー - 利用規約
          </div>
        </div>
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label
          className="modal-box relative rounded-none p-1.5 max-w-md"
          htmlFor=""
        >
          <div className="modal-header bg-blue-500 text-white p-6">
            <p className="text-3xl font-bold">{question}</p>
            <p>のポケモンを全て選択してください</p>
          </div>
          <CaptchaBody choices={choices} />
        </label>
      </label>
    </>
  );
};

export default Pokecaptcha;
