<script lang="ts">
	import './page.css';

	let data: any[] = []; // Array to hold domain records
	let newRecord = {
		domain: "",
		type: "A",
		value: "",
		service: "",
		protocol: "",
		ttl: "300",
		proxied: false,
	};

	let showProxied = false;
	let showServiceAndProtocol = false;

	function handleRecordTypeChange() {
		const proxiedTypes = ["CNAME", "A", "AAAA", "HTTPS", "SVCB"];
		showProxied = proxiedTypes.includes(newRecord.type);
		showServiceAndProtocol = newRecord.type === "SRV";

		// Reset proxied and service/protocol inputs if not applicable
		if (!showProxied) newRecord.proxied = false;
		if (!showServiceAndProtocol) {
			newRecord.service = "";
			newRecord.protocol = "";
		}
	}

	function createRecord() {
		if (newRecord.domain && newRecord.type && newRecord.value) {
			data = [...data, { ...newRecord }];
			// Reset form
			newRecord = {
				domain: "",
				type: "A",
				value: "",
				service: "",
				protocol: "",
				ttl: "300",
				proxied: false,
			};
			showProxied = false;
			showServiceAndProtocol = false;
		}
	}
</script>

<style>
	
</style>



<div class="content">
	<h1>DNS Record Management</h1>

	<form id="dns-record-form" on:submit|preventDefault={createRecord}>
		<div class="form-group">
			<label for="domain">Domain</label>
			<input type="text" id="domain" bind:value={newRecord.domain} required />
		</div>

		<div class="form-group">
			<label for="record-type">Record Type</label>
			<select id="record-type" bind:value={newRecord.type} on:change={handleRecordTypeChange} required>
				<option value="A">A</option>
				<option value="AAAA">AAAA</option>
				<option value="CAA">CAA</option>
				<option value="CERT">CERT</option>
				<option value="CNAME">CNAME</option>
				<option value="DNSKEY">DNSKEY</option>
				<option value="DS">DS</option>
				<option value="HTTPS">HTTPS</option>
				<option value="LOC">LOC</option>
				<option value="MX">MX</option>
				<option value="NAPTR">NAPTR</option>
				<option value="NS">NS</option>
				<option value="PTR">PTR</option>
				<option value="SMIMEA">SMIMEA</option>
				<option value="SRV">SRV</option>
				<option value="SSHFP">SSHFP</option>
				<option value="SVCB">SVCB</option>
				<option value="TLSA">TLSA</option>
				<option value="TXT">TXT</option>
				<option value="URI">URI</option>
			</select>
		</div>

		<div class="form-group">
			<label for="value">Value</label>
			<input type="text" id="value" bind:value={newRecord.value} required />
		</div>

		{#if showServiceAndProtocol}
			<div class="form-group">
				<label for="service">Service</label>
				<input type="text" id="service" bind:value={newRecord.service} />
			</div>
			<div class="form-group">
				<label for="protocol">Protocol</label>
				<input type="text" id="protocol" bind:value={newRecord.protocol} />
			</div>
		{/if}

		<div class="form-group">
			<label for="ttl">TTL (Time to Live)</label>
			<select id="ttl" bind:value={newRecord.ttl}>
				<option value="auto">Auto</option>
				<option value="60">1 minute</option>
				<option value="300">5 minutes</option>
				<option value="3600">1 hour</option>
				<option value="86400">1 day</option>
			</select>
		</div>

		{#if showProxied}
			<div class="checkbox-group">
				<input type="checkbox" id="proxied" bind:checked={newRecord.proxied} />
				<label for="proxied">Proxied</label>
			</div>
		{/if}

		<button type="submit" class="create-btn">Create Record</button>
	</form>

	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th>Domain</th>
					<th>Record Type</th>
					<th>Value</th>
					<th>TTL</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each data as record, index}
					<tr>
						<td>{record.domain}</td>
						<td>{record.type}</td>
						<td>{record.value}</td>
						<td>{record.ttl}</td>
						<td>
							<span class="action-btn" on:click={() => data.splice(index, 1)}>Delete</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
