

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './milestone.css';

const MilestoneTable = () => {
  const initialMilestones = ['Milestone 1', 'Milestone 2', 'Milestone 3', 'IRC'];
  const [batches, setBatches] = useState([]);
  const [savedBatches, setSavedBatches] = useState([]);
  const [newBatch, setNewBatch] = useState({
    id: 1,
    batchNumber: '',
    milestones: [null, null, null, null],
    date: new Date(),
    isEditing: false,
  });

  const handleBatchChange = (value) => {
    setNewBatch((prevBatch) => ({ ...prevBatch, batchNumber: value }));
  };

  const handleMilestoneDateChange = (milestoneIndex, date) => {
    setNewBatch((prevBatch) => {
      const updatedMilestones = [...prevBatch.milestones];
      updatedMilestones[milestoneIndex] = date;
      return { ...prevBatch, milestones: updatedMilestones };
    });
  };

  const handleSaveChanges = () => {
    if (newBatch.isEditing) {
      // Update existing batch in savedBatches
      setSavedBatches((prevSavedBatches) =>
        prevSavedBatches.map((batch) =>
          batch.id === newBatch.id ? { ...newBatch, isEditing: false } : batch
        )
      );
    } else {
      // Add new batch to savedBatches
      setSavedBatches((prevSavedBatches) => [...prevSavedBatches, { ...newBatch, isEditing: false }]);
    }

    setNewBatch({
      id: newBatch.id + 1,
      batchNumber: '',
      milestones: [null, null, null, null],
      date: new Date(),
      isEditing: false,
    });
  };

  const handleEditToggle = (batchId) => {
    const batchToEdit = savedBatches.find((batch) => batch.id === batchId);
    if (batchToEdit) {
      // Set the current batch for editing from savedBatches
      setNewBatch((prevBatch) => ({
        ...prevBatch,
        ...batchToEdit,
        isEditing: true,
      }));
    }
  };

  return (
    <div className="milestoneDiv1">
      <div className="milestoneDiv container-fluid-mode">
        {/* Original Batches Table */}
        <table className="milestoneTable table table-bordered mt-5">
          <thead>
            <tr>
              <th>Batch</th>
              {initialMilestones.map((milestone, milestoneIndex) => (
                <th key={milestoneIndex}>{milestone}</th>
              ))}
              <th className='milestoneTopic'>Edit/Save</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch, index) => (
              <tr key={index}>
                <td>{batch.batchNumber}</td>
                {initialMilestones.map((milestone, milestoneIndex) => (
                  <td key={milestoneIndex}>
                    {batch.milestones[milestoneIndex]?.toLocaleDateString() ?? ''}
                  </td>
                ))}
                <td>
                  <button className='milestoneBTN' onClick={() => handleEditToggle(batch.id)}>Edit</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <select
                  value={newBatch.batchNumber}
                  onChange={(event) => handleBatchChange(event.target.value)}
                >
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={`Batch ${index + 1}`}>
                      {`Batch ${index + 1}`}
                    </option>
                  ))}
                </select>
              </td>
              {initialMilestones.map((milestone, milestoneIndex) => (
                <td key={milestoneIndex}>
                  <DatePicker
                    selected={newBatch.milestones[milestoneIndex]}
                    onChange={(date) => handleMilestoneDateChange(milestoneIndex, date)}
                  />
                </td>
              ))}
              <td>
                <button className='milestoneBTN' onClick={handleSaveChanges}>
                  {newBatch.isEditing ? 'Save' : 'Add'}
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Saved Batches Table */}
        <div className='milestone_Table'>
        <table className="milestoneTable table table-bordered mt-5">
          <thead>
            <tr>
              <th>Batch</th>
              {initialMilestones.map((milestone, milestoneIndex) => (
                <th key={milestoneIndex}>{milestone}</th>
              ))}
              <th className='milestoneTopic'>Edit</th>
            </tr>
          </thead>
          <tbody>
            {savedBatches.map((batch, index) => (
              <tr key={index}>
                <td>{batch.batchNumber}</td>
                {initialMilestones.map((milestone, milestoneIndex) => (
                  <td key={milestoneIndex}>
                    {batch.milestones[milestoneIndex]?.toLocaleDateString() ?? ''}
                  </td>
                ))}
                <td>
                  <button className='milestoneBTN' onClick={() => handleEditToggle(batch.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default MilestoneTable;
