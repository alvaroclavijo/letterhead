import { GlobalContext } from "../../pages";
import { useContext } from "react";
import moment from "moment";
import styles from "../../styles/Styles.module.css";

function MainForm() {
  const {
    setViewForm,
    lastName,
    setLastName,
    lastNameMother,
    setLastNameMother,
    firstName,
    setFirstName,
    insuredNumber,
    setInsuredNumber,
    birthDay,
    setBirthDay,
    birthMonth,
    seTbirthMonth,
    birthYear,
    setBirthYear,
    gender,
    setGender,
    addressZone,
    setAddressZone,
    addressStreet,
    setAddressStreet,
    addressNumber,
    setAddressNumber,
    addressCity,
    setAddressCity,
    salary,
    setSalary,
    job,
    setJob,
    jobEntryDay,
    setJobEntryDay,
    jobEntryMonth,
    setJobEntryMonth,
    jobEntryYear,
    setJobEntryYear,
    companyName,
    setCompanyName,
    companyId,
    setCompanyId,
    actualDate,
    setActualDate,
    setFormData,
  } = useContext(GlobalContext);

  
  console.log(lastName);

  function submitForm() {
    setViewForm(false);
    setFormData({
    lastName: lastName,
    lastNameMother: lastNameMother,
    firstName: firstName,
    insuredNumber: insuredNumber,
    birthDay: birthDay,
    birthMonth: birthMonth,
    birthYear: birthYear,
    gender: gender,
    addressZone: addressZone,
    addressStreet: addressStreet,
    addressNumber: addressNumber,
    addressCity: addressCity,
    salary: salary,
    job: job,
    jobEntryDay: jobEntryDay,
    jobEntryMonth: jobEntryMonth,
    jobEntryYear: jobEntryYear,
    companyName: companyName,
    companyId: companyId,
    actualDate: actualDate
    })
  }
  moment().locale("es");
  return (
    <main className={styles.mainForm}>
      <div className={`${styles.formName}`}>
        <h1>CAJA NACIONAL DE SALUD</h1>
        <h2>DEPARTAMENTO DE AFILIACION</h2>
        <h1>AVISO DE AFILIACION Y REINGRESO DEL TRABAJADOR</h1>
      </div>
      <div className={styles.fieldsContainer}>
        <div className={styles.field1}>
          <h4 className={styles.fieldLabel}>Apellido paterno</h4>
          <input
            className={`${styles.fieldInput} ${styles.fSizeL}`}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Escribe tu apellido paterno"
            type="text"
            maxLength="16"
            value={lastName}
          />
        </div>
        <div className={styles.field1}>
          <h4 className={styles.fieldLabel}>Apellido materno</h4>
          <input
            className={`${styles.fieldInput} ${styles.fSizeL}`}
            onChange={(e) => setLastNameMother(e.target.value)}
            placeholder="Escribe tu apellido materno"
            type="text"
            maxLength="16"
            value={lastNameMother}
          />
        </div>
        <div className={styles.field1}>
          <h4 className={styles.fieldLabel}>Nombre trabajador</h4>
          <input
            value={firstName}
            className={`${styles.fieldInput} ${styles.fSizeL}`}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Escribe tu nombre"
            type="text"
            maxLength="16"
          />
        </div>
        <div className={styles.field1}>
          <h4 className={styles.fieldLabel}>Numero asegurado</h4>
          <input
            value={insuredNumber}
            className={`${styles.fieldInput} ${styles.fSizeL}`}
            onChange={(e) => setInsuredNumber(e.target.value)}
            placeholder="Escribe tu numero de asegurado"
            type="text"
            maxLength="16"
          />
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
              value={birthDay}
              className={`${styles.fieldInput} ${styles.width333} ${styles.height100} ${styles.fSizeM}`}
              onChange={(e) => setBirthDay(e.target.value)}
              placeholder="Dia"
              type="number"
              maxLength="2"
            />
            <input
              value={birthMonth}
              className={`${styles.fieldInput} ${styles.width333} ${styles.height100} ${styles.fSizeM}`}
              onChange={(e) => seTbirthMonth(e.target.value)}
              placeholder="Mes"
              type="text"
              maxLength="7"
            />
            <input
              value={birthYear}
              className={`${styles.fieldInput} ${styles.width333} ${styles.height100} ${styles.fSizeM}`}
              onChange={(e) => setBirthYear(e.target.value)}
              placeholder="Año"
              type="number"
              maxLength="4"
            />
          </div>
        </div>
        <div className={styles.field6}>
          <h4 className={styles.fieldLabel}>Sexo</h4>
          <select
            className={`${styles.fieldInput} ${styles.fSizeM}`}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Vacio">-</option>
            <option value="Masc">Masc</option>
            <option value="Fem">Fem</option>
          </select>
        </div>
        <div className={styles.field7}>
          <h4 className={`${styles.fieldLabel}`}>Domicilio del trabajador</h4>
          <div className={styles.fieldSubLabel}>
            <h4 className={`${styles.fieldLabel} ${styles.width26}`}>Zona</h4>
            <h4 className={`${styles.fieldLabel} ${styles.width33}`}>Calle</h4>
            <h4 className={`${styles.fieldLabel} ${styles.width15}`}>N.-</h4>
            <h4 className={`${styles.fieldLabel} ${styles.width26}`}>
              Localidad
            </h4>
          </div>
          <div className={styles.fieldInput}>
            <input
              value={addressZone}
              className={`${styles.fieldInput} ${styles.width26} ${styles.height100} ${styles.fSizeS}`}
              onChange={(e) => setAddressZone(e.target.value)}
              placeholder="Zona"
              type="text"
              maxLength="15"
            />
            <input
              value={addressStreet}
              className={`${styles.fieldInput} ${styles.width33} ${styles.height100} ${styles.fSizeS}`}
              onChange={(e) => setAddressStreet(e.target.value)}
              placeholder="Calle"
              type="text"
              maxLength="17"
            />
            <input
              value={addressNumber}
              className={`${styles.fieldInput} ${styles.width15} ${styles.height100} ${styles.fSizeM}`}
              onChange={(e) => setAddressNumber(e.target.value)}
              placeholder="Número"
              type="number"
              maxLength="6"
            />
            <input
              value={addressCity}
              className={`${styles.fieldInput} ${styles.width26} ${styles.height100} ${styles.fSizeM}`}
              onChange={(e) => setAddressCity(e.target.value)}
              placeholder="Ciudad"
              type="text"
              maxLength="12"
            />
          </div>
        </div>
        <div className={styles.field8}>
          <h4 className={styles.fieldLabel}>Salario Mensual</h4>
          <input
            value={salary}
            className={`${styles.fieldInput} ${styles.fSizeM}`}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Salario"
            type="text"
            maxLength="19"
          />
        </div>
        <div className={styles.field9}>
          <h4 className={styles.fieldLabel}>Ocupacion actual</h4>
          <input
            value={job}
            className={`${styles.fieldInput} ${styles.fSizeM}`}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Ocupación actual"
            type="text"
            maxLength="29"
          />
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
              value={jobEntryDay}
              className={`${styles.fieldInput} ${styles.width333} ${styles.height100} ${styles.fSizeM}`}
              onChange={(e) => setJobEntryDay(e.target.value)}
              placeholder="Dia"
              type="number"
              maxLength="2"
            />
            <input
              value={jobEntryMonth}
              className={`${styles.fieldInput} ${styles.width333} ${styles.height100} ${styles.fSizeM}`}
              onChange={(e) => setJobEntryMonth(e.target.value)}
              placeholder="Mes"
              type="text"
              maxLength="12"
            />
            <input
              value={jobEntryYear}
              className={`${styles.fieldInput} ${styles.width333} ${styles.height100} ${styles.fSizeM}`}
              onChange={(e) => setJobEntryYear(e.target.value)}
              placeholder="Año"
              type="number"
              maxLength="4"
            />
          </div>
        </div>
        <div className={styles.field11}>
          <h4 className={`${styles.fieldLabel} ${styles.bgWhite}`}>
            Nombre o razon social del empleador
          </h4>
          <input
            value={companyName}
            className={`${styles.fieldInput} ${styles.fSizeL}`}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Escribe nombre del empleador"
            type="text"
            maxLength="48"
          />
        </div>
        <div className={styles.field12}>
          <h4 className={`${styles.fieldLabel} ${styles.bgWhite}`}>
            Numero del empleador
          </h4>
          <input
            value={companyId}
            className={`${styles.fieldInput} ${styles.fSizeL}`}
            onChange={(e) => setCompanyId(e.target.value)}
            placeholder="Escrie el numero del empleador"
            type="text"
            maxLength="30"
          />
        </div>
        <div className={styles.field13}>
          <input
            className={`${styles.fieldInput} ${styles.fSizeL}`}
            onChange={(e) => setActualDate(e.target.value)}
            value={actualDate}
            type="text"
            maxLength="52"
          />
          <h4 className={`${styles.fieldLabel} ${styles.bgWhite}`}>
            Lugar y Fecha
          </h4>
        </div>
        <div className={styles.field14}></div>
        <div className={styles.field15}></div>
        <div className={styles.field16}></div>
      </div>
      <button className={styles.button} onClick={() => submitForm()}>
        IMPRIMIR
      </button>
    </main>
  );
}

export default MainForm;
