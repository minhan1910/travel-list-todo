/* eslint-disable react/prop-types */
function Stats({
  getNumberOfItems,
  getNumberOfItemsPacked,
  getPercentageNumberOfItemsPacked,
}) {
  if (!getNumberOfItems()) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {getPercentageNumberOfItemsPacked() === 100 ? (
          <>You got everything! Ready to go ✈</>
        ) : (
          <>
            💼 You have {getNumberOfItems()} items on your list, and you already
            packed {getNumberOfItemsPacked()} (
            {getPercentageNumberOfItemsPacked()}
            %)
          </>
        )}
      </em>
    </footer>
  );
}

export default Stats;
