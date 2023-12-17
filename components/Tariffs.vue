<template>
  <section>
    <div class="lg:max-w-12col max-w-5col md:max-w-8col mt-20 mx-auto px-8 space-y-8 w-full"><h2
        class="font-serif leading-tight text-[2rem] uppercase">Тарифы</h2>
      <div class="flex flex-col gap-6 lg:gap-8 md:flex-row">
        <div
            class="bg-[radial-gradient(circle_at_18.7%_37.8%,#f0f0f0_0,#cdd6da_90%)] flex flex-col gap-9 pb-5 pt-10 px-3 rounded-2xl sm:px-8 sm:py-10 text-black w-full">
          <h4 class="font-medium text-3xl text-center">Classic</h4>
          <div class="flex flex-col items-center">
            <div class="w-fit font-serif"><p class="font-bold text-5xl"><span>₴</span>3600</p></div>
          </div>
          <p class="font-semibold text-center text-sm uppercase"> 2 модуля 12 уроков </p>
          <div class="px-3 space-y-4">
            <ul class="font-medium">
              <li class="check">доступ к общему чату</li>
              <li class="check">доступ к материалу 1 месяц</li>
              <li class="check">конспекты и доп материал к урокам</li>
              <li class="check">сертификат о прохождение курса</li>
            </ul>
          </div>
          <div class="flex flex-col justify-center mt-auto pt-6">
            <LiquidButton class="tariff-button" greetingMessage="Купить" />
<!--            <a-->
<!--              class="!font-semibold !h-12 btn golden-border inline-block md:w-auto overflow-hidden p-[2px] w-full"-->
<!--              role="button" href="https://t.me/kurzhos_online" target="_blank"> <span-->
<!--              class="golden h-full inline-flex items-center justify-center rounded-[0.8725rem] w-full"> Купить </span>-->
<!--          </a>-->
          </div>
        </div>
        <div
            class="bg-[radial-gradient(circle_at_18.7%_37.8%,#fbe972_0,#d99428_90%)] flex flex-col gap-9 pb-5 pt-10 px-3 rounded-2xl sm:px-8 sm:py-10 text-black w-full">
          <h4 class="font-medium text-3xl text-center">VIP</h4>
          <div class="flex flex-col items-center">
            <div class="w-fit font-serif"><p class="font-bold text-5xl"><span>₴</span>4800</p></div>
          </div>
          <p class="font-semibold text-center text-sm uppercase"> 3 модуля 15 уроков </p>
          <div class="px-3 space-y-4"><p class="text-justify">Для тех кто хочет делать не только идеальное полотно, но и
            подвигать себя в инстаграмм.</p>
            <ul class="font-medium">
              <li class="check">доступ к общему чату</li>
              <li class="check"> обратная связь с Валерией Куржос в личных сообщениях</li>
              <li class="check">доступ к материалу 2 месяц</li>
              <li class="check">конспекты и доп материал к урокам</li>
              <li class="check">сертификат о прохождение курса</li>
            </ul>
          </div>
          <div class="flex flex-col justify-center mt-auto pt-6">
            <LiquidButton class="tariff-button" greetingMessage="Купить" />
<!--            <a-->
<!--              class="!font-semibold !h-12 black-border btn inline-block md:w-auto overflow-hidden p-[2px] w-full"-->
<!--              role="button" href="https://t.me/kurzhos_online" target="_blank"> <span-->
<!--              class="black h-full inline-flex items-center justify-center rounded-[0.8725rem] text-white w-full"> Купить </span>-->
<!--          </a>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LiquidButton from "./LiquidButton.vue";
export default {
  name: "Tariffs",
  components: {LiquidButton}
}
</script>

<style lang="scss">
.tariff-button {
  margin: auto;
}
.check:before {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-rotate: 45deg;
    content: var(--tw-content);
    transform: translate(var(--tw-translate-x),var(--tw-translate-y))rotate(var(--tw-rotate))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--tw-scale-x))scaleY(var(--tw-scale-y));
    transform-origin: 0 100%;
    border-style: solid;
    border-color: currentColor;
    border-bottom-width: 2px;
    border-right-width: 2px;
    flex-shrink: 0;
    width: 5px;
    height: 11px;
    margin-top: 0.25rem;
    margin-right: 1rem;
    display: inline-block;
  }
</style>
