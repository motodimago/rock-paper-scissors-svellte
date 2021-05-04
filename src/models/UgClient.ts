const MASTER_ID = 'Ugo97x-1';

export const ALL_UgEventKind = ['pv', 'cv', 'event'] as const;
type eventKindTuple = typeof ALL_UgEventKind;
export type EventKind = eventKindTuple[number];

export default class UgClient {
  private serviceId: string | false;

  constructor() {
    this.serviceId = false;
    this._setServiceId();
    this._setUgScript();
  }

  pushPv(): void {
    this._push('pv');
  }

  pushCv(tag: string): void {
    this._push('cv', tag);
  }

  pushEvent(tag: string): void {
    this._push('event', tag);
  }

  _push(pushType: EventKind, tag?: string): void {
    const ug = (window as any).usergram || [];
    const ugAttr: { [key: string]: string } = {};
    if (this.serviceId) {
      ugAttr['serviceId'] = this.serviceId;
    }
    let params = ['send', MASTER_ID, pushType, ugAttr];
    if (tag) {
      params = ['send', MASTER_ID, pushType, tag, ugAttr];
    }
    ug.push(params);
  }

  _setUgScript(): void {
    const ug = (window as any).usergram || [];
    if (!ug.l) {
      ug.s = new Date().getTime();
      ug.l = true;
      const scriptElement = document.getElementsByTagName('script')[0];
      const inertScriptElement = this._createInertScriptElement();
      scriptElement.parentNode.insertBefore(inertScriptElement, scriptElement);
    }
  }

  _setServiceId(): void {
    fetch('http://api.ipify.org/').then((response) =>
      response.text().then((ip) => {
        this.serviceId = ip;
      })
    );
  }

  _createInertScriptElement(): HTMLScriptElement {
    const elm = document.createElement('script');
    elm.type = 'text/javascript';
    elm.async = true;
    elm.src = '//code.usergram.info/js/usergram.js';
    return elm;
  }
}
