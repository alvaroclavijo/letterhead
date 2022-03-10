import { useState, useEffect } from 'react';
import moment from 'moment';
import Head from 'next/head';
import styles from '../styles/Styles.module.css';
import 'moment/locale/es';

export default function Home() {
  const [actualDate, setActualDate] = useState(Date.now());
  const [lastName, setLastName] = useState();
  const [lastNameMother, setLastNameMother] = useState();
  const [firstName, setFirstName] = useState();
  const [insuredNumber, setInsuredNumber] = useState();
  const [birthDay, setBirthDay] = useState();
  const [birthMonth, seTbirthMonth] = useState();
  const [birthYear, setBirthYear] = useState();
  const [gender, setGender] = useState();
  const [addressZone, setAddressZone] = useState();
  const [addressStreet, setAddressStreet] = useState();
  const [addressNumber, setAddressNumber] = useState();
  const [addressCity, setAddressCity] = useState();
  const [salary, setSalary] = useState();
  const [job, setJob] = useState();
  const [jobEntryDay, setJobEntryDay] = useState();
  const [jobEntryMonth, setJobEntryMonth] = useState();
  const [jobEntryYear, setJobEntryYear] = useState();
  const [companyName, setCompanyName] = useState();
  const [companyId, setCompanyId] = useState();

  moment().locale('es');

  function submitForm(){
    console.log(actualDate);
    console.log(lastName);
    console.log(lastNameMother);
    console.log(firstName);
    console.log(insuredNumber);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);
    console.log(gender);
    console.log(addressZone);
    console.log(addressStreet);
    console.log(addressNumber);
    console.log(addressCity);
    console.log(salary);
    console.log(job);
    console.log(jobEntryDay);
    console.log(jobEntryMonth);
    console.log(jobEntryYear); 
    console.log(companyName);
    console.log(companyId);
  }
  return ( 
    <div className={styles.container}>
      <Head>
        <title>LetterHead App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className={styles.mainForm}>
        <div className={`${styles.formName}`}>
          <h1>CAJA NACIONAL DE SALUD</h1>
          <h2>DEPARTAMENTO DE AFILIACION</h2>
          <h1>AVISO DE AFILIACION Y REINGRESO DEL TRABAJADOR</h1>
        </div>
        <div className={styles.fieldsContainer}>
          <div className={styles.field1}>
            <h4 className={styles.fieldLabel}>Apellido paterno</h4>
            <input className={styles.fieldInput} onChange={e => setLastName(e.target.value)} placeholder="Escribe tu apellido paterno" type="text"  maxLength="17"/>
          </div>
          <div className={styles.field1}>
            <h4 className={styles.fieldLabel}>Apellido materno</h4>
            <input className={styles.fieldInput} onChange={e => setLastNameMother(e.target.value)} placeholder="Escribe tu apellido maternno" type="text"  maxLength="17" />
          </div>
          <div className={styles.field1}>
            <h4 className={styles.fieldLabel}>Nombre trabajador</h4>
            <input className={styles.fieldInput} onChange={e => setFirstName(e.target.value)} placeholder="Escribe tu nombre" type="text"  maxLength="17"/>
          </div>
          <div className={styles.field1}>
            <h4 className={styles.fieldLabel}>Numero asegurado</h4>
            <input className={styles.fieldInput} onChange={e => setInsuredNumber(e.target.value)} placeholder="Escribe tu numero de asegurado" type="text"  maxLength="17"/>
          </div>
          <div className={styles.field5}>
            <h4 className={styles.fieldLabel}>Fecha de nacimiento</h4>
            <div className={styles.fieldSubLabel}>
              <h4 className={styles.fieldLabel}>Dia</h4>
              <h4 className={styles.fieldLabel}>Mes</h4>
              <h4 className={styles.fieldLabel}>Año</h4>
            </div>
            <div className={styles.fieldInput}>
              <input
                className={`${styles.fieldInput} ${styles.width333} ${styles.height100}`}
                onChange={e => setBirthDay(e.target.value)} placeholder="Dia" type="text"  maxLength="2"
              />
              <input
                className={`${styles.fieldInput} ${styles.width333} ${styles.height100}`}
                onChange={e => seTbirthMonth(e.target.value)} placeholder="Mes" type="text"  maxLength="10"
              />
              <input
                className={`${styles.fieldInput} ${styles.width333} ${styles.height100}`}
                onChange={e => setBirthYear(e.target.value)} placeholder="Año" type="text"  maxLength="4"
              />
            </div>
          </div>
          <div className={styles.field6}>
            <h4 className={styles.fieldLabel}>Sexo</h4>
            <select className={styles.fieldInput} value={gender} onChange={e => setGender(e.target.value)}>
            <option value="Vacio">-</option>
              <option value="Masc">Masc</option>
              <option value="Fem">Fem</option>
            </select>
          </div>
          <div className={styles.field7}>
            <h4 className={styles.fieldLabel}>Domicilio del trabajador</h4>
            <div className={styles.fieldSubLabel}>
              <h4 className={`${styles.fieldLabel} ${styles.width26}`}>Zona</h4>
              <h4 className={`${styles.fieldLabel} ${styles.width33}`}>
                Calle
              </h4>
              <h4 className={`${styles.fieldLabel} ${styles.width15}`}>N.-</h4>
              <h4 className={`${styles.fieldLabel} ${styles.width26}`}>
                Localidad
              </h4>
            </div>
            <div className={styles.fieldInput}>
              <input
                className={`${styles.fieldInput} ${styles.width26} ${styles.height100}`}
                onChange={e => setAddressZone(e.target.value)} placeholder="Zona" type="text"  maxLength="12"
              />
              <input
                className={`${styles.fieldInput} ${styles.width33} ${styles.height100}`}
                onChange={e => setAddressStreet(e.target.value)} placeholder="Calle" type="text"  maxLength="12"
              />
              <input
                className={`${styles.fieldInput} ${styles.width15} ${styles.height100}`}
                onChange={e => setAddressNumber(e.target.value)} placeholder="Número" type="text"  maxLength="5"
              />
              <input
                className={`${styles.fieldInput} ${styles.width26} ${styles.height100}`}
                onChange={e => setAddressCity(e.target.value)} placeholder="Ciudad" type="text"  maxLength="12"
              />
            </div>
          </div>
          <div className={styles.field8}>
            <h4 className={styles.fieldLabel}>Salario Mensual</h4>
            <input className={styles.fieldInput} onChange={e => setSalary(e.target.value)} placeholder="Salario" type="text"  maxLength="12" />
          </div>
          <div className={styles.field9}>
            <h4 className={styles.fieldLabel}>Ocupacion actual</h4>
            <input className={styles.fieldInput} onChange={e => setJob(e.target.value)} placeholder="Ocupación actual" type="text"  maxLength="12" />
          </div>
          <div className={styles.field10}>
            <h4 className={styles.fieldLabel}>Fecha de ingreso al trabajo</h4>
            <div className={styles.fieldSubLabel}>
              <h4 className={styles.fieldLabel}>Dia</h4>
              <h4 className={styles.fieldLabel}>Mes</h4>
              <h4 className={styles.fieldLabel}>Año</h4>
            </div>
            <div className={styles.fieldInput}>
              <input
                className={`${styles.fieldInput} ${styles.width333} ${styles.height100}`}
                onChange={e => setJobEntryDay(e.target.value)} placeholder="Dia" type="text"  maxLength="2"
              />
              <input
                className={`${styles.fieldInput} ${styles.width333} ${styles.height100}`}
                onChange={e => setJobEntryMonth(e.target.value)} placeholder="Mes" type="text"  maxLength="10"
              />
              <input
                className={`${styles.fieldInput} ${styles.width333} ${styles.height100}`}
                onChange={e => setJobEntryYear(e.target.value)} placeholder="Año" type="text"  maxLength="4"
              />
            </div>
          </div>
          <div className={styles.field11}>
            <h4 className={`${styles.fieldLabel} ${styles.bgWhite}`}>Nombre o razon social del empleador</h4>
            <input className={styles.fieldInput} onChange={e => setCompanyName(e.target.value)} placeholder="Escribe nombre del empleador" type="text"  maxLength="25"/>
          </div>
          <div className={styles.field12}>
          <h4 className={`${styles.fieldLabel} ${styles.bgWhite}`}>Numero del empleador</h4>
            <input className={styles.fieldInput} onChange={e => setCompanyId(e.target.value)} placeholder="Escrie el numero del empleador" type="text"  maxLength="12"/>
            </div>
          <div className={styles.field13}>
          <input className={styles.fieldInput}  value={`SUCRE, ${moment(actualDate).format('DD')} DE ${moment(actualDate).format('MMMM')} DE ${moment(actualDate).format('YYYY')}`} type="text" />
          <h4 className={`${styles.fieldLabel} ${styles.bgWhite}`}>Lugar y Fecha</h4>
            </div>
          <div className={styles.field14}></div>
          <div className={styles.field15}></div>
          <div className={styles.field16}></div>
        </div>
        <button className={styles.button} onClick={() => submitForm()}>IMPRIMIR</button>
      </form>
    </div>
  );
}
