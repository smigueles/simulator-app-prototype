import { useSimulatorContext } from "../../context";
import "./style.css";

const correctAnswersInfo: Record<
  number,
  { label: string; explanation: string }
> = {
  1: {
    label: "Alertar al resto de la familia y comenzar a prepararse",
    explanation: "Alertar a todos permite una reacción rápida y coordinada.",
  },
  2: {
    label: "Llenar recipientes con agua y juntar provisiones",
    explanation:
      "Tener agua limpia y provisiones es clave ante posibles cortes o aislamiento.",
  },
  3: {
    label: "Cortar los suministros desde las llaves principales",
    explanation:
      "Siempre se recomienda cortar luz, agua y gas para evitar accidentes.",
  },
  4: {
    label: "Tapar las aberturas con trapos y bolsas de arena",
    explanation:
      "Sellar aberturas evita que el agua entre y cause más daño dentro del hogar.",
  },
  5: {
    label: "Colocar electrodomésticos y productos tóxicos en lugares elevados",
    explanation: "Evita pérdidas materiales y protege de productos peligrosos.",
  },
  6: {
    label: "Mantenerse en un lugar alto con radio o celular cargado",
    explanation:
      "Permanecer en lugares altos y mantenerse informado es lo más seguro.",
  },
};

const FinalResult = () => {
  const { simulatorData } = useSimulatorContext();
  const { responsesByStep, timeByStep } = simulatorData;

  const totalQuestions = Object.keys(responsesByStep).length;

  const correctAnswers = Object.values(responsesByStep).filter(
    (res) => res === "correcta"
  ).length;

  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = percentage >= 70;

  const totalTimeInSeconds = Object.values(timeByStep || {}).reduce(
    (acc, seconds) => acc + seconds,
    0
  );

  return (
    <div className="step-content">
      <h1 className="step-title">Resultado Final</h1>

      <p className="content">
        Obtuviste <strong>{correctAnswers}</strong> de{" "}
        <strong>{totalQuestions}</strong> respuestas correctas.
      </p>
      <img
        src={
          passed
            ? "assets/success-simulator.jpg"
            : "assets/failed-simulator.jpg"
        }
        alt={"media"}
        className="media-item"
      />

      <p
        className="content"
        style={{
          color: passed ? "lightgreen" : "#ff4d4d",
          fontWeight: "bold",
          fontSize: "1.3rem",
        }}
      >
        {passed
          ? "¡Aprobaste la simulación! 🎉"
          : "No alcanzaste el puntaje mínimo 😔"}
      </p>

      <p className="content">
        Porcentaje: <strong>{percentage}%</strong>
      </p>

      <p className="content">
        ⏱️ Tiempo total de la simulación:{" "}
        <strong>{totalTimeInSeconds} segundos</strong>
      </p>

      <div className="content" style={{ marginTop: "1.5rem" }}>
        <h2
          style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "wheat" }}
        >
          📊 Detalle por paso:
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.entries(responsesByStep).map(([stepId, value]) => {
            const stepNum = Number(stepId);
            const time = timeByStep?.[stepNum] ?? 0;
            const isCorrect = value === "correcta";
            const correctInfo = correctAnswersInfo[stepNum];

            return (
              <li
                key={stepId}
                style={{
                  marginBottom: "1.2rem",
                  color: isCorrect ? "lightgreen" : "#ff4d4d",
                }}
              >
                <p style={{ margin: 0 }}>
                  <strong>Paso {stepId}</strong>:{" "}
                  {isCorrect ? "✅ Correcta" : "❌ Incorrecta"} —{" "}
                  <em>{time} segundos</em>
                </p>

                {!isCorrect && correctInfo && (
                  <p
                    style={{
                      margin: "0.2rem 0",
                      color: "#ffaaaa",
                      fontSize: "0.95rem",
                    }}
                  >
                    👉 La respuesta correcta era:{" "}
                    <strong>{correctInfo.label}</strong>
                  </p>
                )}

                {correctInfo?.explanation && (
                  <p
                    style={{
                      margin: "0.2rem 0 0",
                      color: "#ccc",
                      fontSize: "0.95rem",
                    }}
                  >
                    {correctInfo.explanation}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FinalResult;
