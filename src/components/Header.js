import React from 'react';
import { FormattedMessage } from 'react-intl';

function Header() {
  return (
    <header className="mt-4 text-center">
      <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          className='fw-bolder fs-1 text-black'>
        <FormattedMessage id="header.title" defaultMessage="¡Adopta un Robot con Robot Lovers!" />
      </h1>
      <hr />
      <img
        src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RYLopK91hPUwcmFxC8Q-KTzwR38TKLVzYli2eQKy~u3zgHnr9etao~pIi~X2fWPrrBFl8B4RCzYAY1bl-LnO~ru7a8h--avtmJm0VYkmVjN1tj6NQXtVO1ISgotgxSF7CxtA2GWP7zLqbfeBntRxLR3HcJI83HXaXYDOm7jt7LMmkwTypCj1tuz98uWYYskOxbhNqMxFabvs53SRsas8Rlg3q-oDNRs5aLXE45cHaqH6~JGuA2ggtAvx29Z7KTjsHkTggvbCmEnu9XxtQQdr6LoL8y8-aUuTvPq-9NJY5MB~Zg3YrSM9Peowd6sMLf36RLgvReCUQHZPNFYg1DoTrw__"
        alt="Robots"
        className="img-fluid"
      />
      <hr />
    </header>
  );
}

export default Header;
