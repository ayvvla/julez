import Script from "next/script";
import React from "react";

export default function Flower() {
  function onload() {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  }

  return (
    <main className="">
      <h1 className="font-bold">Titilayo</h1>
      <div className="night"></div>
      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1">Titilayo</div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1">Aduke</div>
            <div className="flower__light flower__light--2">Aduke</div>
            <div className="flower__light flower__light--3">Aduke</div>
            <div className="flower__light flower__light--4">Aduke</div>
            <div className="flower__light flower__light--5">Aduke</div>
            <div className="flower__light flower__light--6">Aduke</div>
            <div className="flower__light flower__light--7">Aduke</div>
            <div className="flower__light flower__light--8">Aduke</div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>

        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1">Julianah</div>
            <div className="flower__light flower__light--2">Julianah</div>
            <div className="flower__light flower__light--3">Julianah</div>
            <div className="flower__light flower__light--4">Julianah</div>
            <div className="flower__light flower__light--5">Julianah</div>
            <div className="flower__light flower__light--6">Julianah</div>
            <div className="flower__light flower__light--7">Julianah</div>
            <div className="flower__light flower__light--8">Julianah</div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1">Titilayo</div>
            <div className="flower__light flower__light--2">Titilayo</div>
            <div className="flower__light flower__light--3">Titilayo</div>
            <div className="flower__light flower__light--4">Titilayo</div>
            <div className="flower__light flower__light--5">Titilayo</div>
            <div className="flower__light flower__light--6">Titilayo</div>
            <div className="flower__light flower__light--7">Titilayo</div>
            <div className="flower__light flower__light--8">Titilayo</div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "1.2s" }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "2.4s" }}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "2.8s" }}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "2.8s" }}>
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        <div className="grow-ans" style={{ animationDelay: "3.2s" }}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>

        <div className="long-g long-g--0">
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "2.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.4s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--1">
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.8s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--2">
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.4s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--3">
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--4">
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--5">
          <div className="grow-ans" style={{ animationDelay: "4s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--6">
          <div className="grow-ans" style={{ animationDelay: "4.2s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.4s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.6s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "4.8s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>

        <div className="long-g long-g--7">
          <div className="grow-ans" style={{ animationDelay: "3s" }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.2s" }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.5s" }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ animationDelay: "3.6s" }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
      </div>
    </main>
  );

  
}
