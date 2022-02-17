import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Impressum() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <main>

    <div className="impressum">

      <div className="impressum-navigation">
        <NavLink to="/">Back to the main page</NavLink>
      </div>

      <h2>Impressum</h2>
      <p>Notice for international readers:<br />
      <small>The following "Impressum" includes contact information and detailed insights in our rights and obligations. We are based in Germany and therefore are subject to german law. That's why the text is in german. If you don't speak german and have any questions about it, please do not hesitate to contact us via the email below.</small></p>

      <h2>Angaben gemäß §5 TMG</h2>
      <p>Below Surface Medien (Einzelunternehmen)<br />
      Postanschrift:<br />
      Fabian Schöneberger<br />
      Josef-Wirmer-Str. 15<br />
      53123 Bonn</p>
      <h2>Kontakt</h2>
      <p>Per Post an die angegebene Adresse oder per E-Mail an: fabian at besurelabel dot de (Achtung: Bitte "at" durch "@" und "dot" durch "." ersetzen. Sie können auch das Kontaktformular dieser Seite benutzen.<br />
      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: 206/5297/3585</p>
      <h2>Haftung für Inhalte</h2>
      <p>Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
      <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
      <h2>Haftung für Links</h2>
      <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
      <h2>Urheberrecht</h2>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
      <p>Quelle des Impressums: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer">e-recht24.de</a></p>
    </div>
  </main>;  
}

export default Impressum;
